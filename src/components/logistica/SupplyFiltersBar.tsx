import React from "react";
import { mockPortfolios } from "../../data/mockLogistica";

export interface FiltersState {
  search: string;
  portfolio: string;
  period: string;
  assigned: string;
  investor: string;
  status: string;
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
    setFilters(prev => ({
      ...prev,
      [key]: prev[key] === value ? "All" : value
    }));
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
        {/* Attribute Pills */}
        <div className="filter-group">
          <span className="group-label">Portafolio:</span>
          {mockPortfolios.map(p => (
            <button 
              key={p.id}
              className={`filter-pill ${filters.portfolio === p.id ? "active" : ""}`}
              onClick={() => toggleFilter("portfolio", p.id)}
            >
              {p.nombre}
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
              className={`filter-pill-outline ${filters.status === st ? "active" : ""} status-${st.toLowerCase().replace(" ", "-")}`}
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
