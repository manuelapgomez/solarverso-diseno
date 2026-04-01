import React from "react";
import { mockPortfolios } from "../../data/mockLogistica";
import { mockMaterialTrackingData } from "../../data/mockMaterials";

export interface FiltersState {
  search: string;
  portfolio: string[];
  investor: string[];
  equipment: string[];
  status: string[];
  period: string;
  assigned: string;
}

interface SupplyFiltersBarProps {
  filters: FiltersState;
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
}

export const SupplyFiltersBar: React.FC<SupplyFiltersBarProps> = ({ filters, setFilters }) => {
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
  };

  const toggleFilter = (key: keyof FiltersState, value: string) => {
    setFilters(prev => {
      const current = prev[key];
      if (Array.isArray(current)) {
        const isSelected = current.includes(value);
        return {
          ...prev,
          [key]: isSelected 
            ? current.filter(item => item !== value)
            : [...current, value]
        };
      }
      return {
        ...prev,
        [key]: prev[key] === value ? "All" : value
      };
    });
  };

  return (
    <div className="filters-bar">
      <div className="search-wrapper">
        <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input 
          type="text" 
          placeholder="Buscar Buque, BL o Minigranja..." 
          value={filters.search}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="pills-container">
        {/* Inversionista Category (Always visible) */}
        <div className="filter-group">
          <span className="group-label">Inversionista:</span>
          {["FMO", "IDB Invest"].map(inv => (
            <button 
              key={inv}
              className={`filter-pill ${filters.investor.includes(inv) ? "active" : ""}`}
              onClick={() => toggleFilter("investor", inv)}
            >
              {inv}
            </button>
          ))}
        </div>

        <div className="v-divider"></div>

        {/* Portafolio Category (Dependent on Investor) */}
        {filters.investor.length > 0 && (
          <>
            <div className="filter-group">
              <span className="group-label">Portafolio:</span>
              {mockPortfolios
                .filter(p => {
                  // If we need strict data binding, we would use mockMaterialTrackingData here
                  // For now, let's assume mockPortfolios IDs or names can be matched roughly or just show all if investor selected
                  // To be precise: match investor name prefix or cross-ref with mockMaterialTrackingData
                  const investorPortfolios = filters.investor.flatMap(invName => {
                    const group = mockMaterialTrackingData.find(g => g.investor === invName);
                    return group ? group.portfolios.map(p => p.id) : [];
                  });
                  return investorPortfolios.includes(p.id);
                })
                .map(p => (
                  <button 
                    key={p.id}
                    className={`filter-pill ${filters.portfolio.includes(p.id) ? "active" : ""}`}
                    onClick={() => toggleFilter("portfolio", p.id)}
                  >
                    {p.nombre}
                  </button>
                ))}
            </div>
            <div className="v-divider"></div>
          </>
        )}

        {/* Equipment Category */}
        <div className="filter-group">
          <span className="group-label">Equipo:</span>
          {["Tracker", "Shelter", "Inversor", "Panel", "Reconectador"].map(eq => (
            <button 
              key={eq}
              className={`filter-pill ${filters.equipment.includes(eq) ? "active" : ""}`}
              onClick={() => toggleFilter("equipment", eq)}
            >
              {eq}
            </button>
          ))}
        </div>

        <div className="v-divider"></div>

        {/* Status Pills (Outline) */}
        <div className="filter-group">
          <span className="group-label">Estado:</span>
          {["On Route", "Pending", "Arrived"].map(st => (
            <button 
              key={st}
              className={`filter-pill-outline ${filters.status.includes(st) ? "active" : ""} status-${st.toLowerCase().replace(" ", "-")}`}
              onClick={() => toggleFilter("status", st)}
            >
              {st}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
