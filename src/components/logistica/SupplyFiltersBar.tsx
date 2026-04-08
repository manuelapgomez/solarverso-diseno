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
    <div className="supply-filters-container">
      <div className="tools-bar">
        <div className="search-wrapper">
          <svg className="tool-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Buscar por nombre, código o ubicación..." 
            value={filters.search}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        <button className="tool-btn" title="Sort">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 10 12 7 9 10"></polyline>
            <polyline points="15 14 12 17 9 14"></polyline>
          </svg>
        </button>

        <button className="tool-btn filter-toggle-btn" title="Filters">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            <path d="M6 9l6 6 6-6" opacity="0.5"></path>
          </svg>
        </button>
      </div>

      <div className="active-pills-row">
        {/* Mocking the specific pills from reference */}
        <div className="filter-pill-teal">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          <span>Periodo del proyecto: Q4 Oct - Dic</span>
        </div>
        
        <div className="filter-pill-teal outline">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span>Priorización</span>
        </div>

        <div className="filter-pill-teal active">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8L1 4.49992L1.00003 2H23L22.9999 4.49992L21 8Z"></path></svg>
          <span>Suministro</span>
        </div>

        <div className="filter-pill-teal">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Inversionista: Ayurá</span>
        </div>

        <div className="filter-pill-teal">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <span>Portafolio: Ayurá 1</span>
        </div>
      </div>
    </div>
  );
};
