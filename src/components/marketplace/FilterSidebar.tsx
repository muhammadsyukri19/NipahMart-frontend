import React from 'react';

interface FilterSidebarProps {
  categories: string[];
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
}

export function FilterSidebar({ categories, selectedCategories, onToggleCategory, selectedTags, onToggleTag }: FilterSidebarProps) {
  const SUSTAINABILITY_TAGS = ["🌿 100% Organik", "👩‍🌾 Pemberdayaan Perempuan", "♻️ Zero Waste Packaging"];

  return (
    <aside className="w-full lg:w-[240px] flex-shrink-0">
      {/* Kategori */}
      <div className="mb-10">
        <h3 className="text-[13px] font-bold text-primary-dark uppercase tracking-wider mb-4 pb-2 border-b border-surface-container-high">
          Filter Kategori
        </h3>
        <div className="space-y-3">
          {categories.map(cat => {
            const isSelected = selectedCategories.includes(cat);
            return (
              <label key={cat} className="flex items-center gap-3 cursor-pointer group" onClick={() => onToggleCategory(cat)}>
                {isSelected ? (
                  <div className="w-5 h-5 bg-primary-dark rounded-sm flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                ) : (
                  <div className="w-5 h-5 bg-white border border-outline-variant rounded-sm flex items-center justify-center group-hover:border-primary-dark transition-colors shrink-0"></div>
                )}
                <span className={`text-[13px] font-medium transition-colors ${isSelected ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'}`}>
                  {cat}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Keberlanjutan */}
      <div className="mb-10">
        <h3 className="text-[13px] font-bold text-primary-dark uppercase tracking-wider mb-4 pb-2 border-b border-surface-container-high">
          Keberlanjutan
        </h3>
        <div className="space-y-3">
          {SUSTAINABILITY_TAGS.map(tag => {
            const isSelected = selectedTags.includes(tag);
            return (
              <label key={tag} className="flex items-center gap-3 cursor-pointer group" onClick={() => onToggleTag(tag)}>
                {isSelected ? (
                  <div className="w-5 h-5 rounded-full border-[5px] border-on-success-container bg-white shrink-0"></div>
                ) : (
                  <div className="w-5 h-5 rounded-full border border-outline-variant bg-white group-hover:border-primary-dark transition-colors shrink-0"></div>
                )}
                <span className={`text-[13px] font-medium transition-colors ${isSelected ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'}`}>
                  {tag}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Did you know box */}
      <div className="bg-surface-container-highest p-5 rounded-sm border border-outline-variant/50">
        <h4 className="text-[12px] font-bold text-primary-dark mb-2">Tahukah Anda?</h4>
        <p className="text-[13px] text-on-surface-variant leading-relaxed">
          Membeli produk <span className="font-bold text-on-success-container">'Eco-Sorted'</span> mengurangi jejak karbon belanja Anda hingga 40%.
        </p>
        <div className="mt-4 flex justify-end opacity-20">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#2A3B2C"><path d="M12 2L8 9h3v13h2V9h3L12 2z"/></svg>
        </div>
      </div>
    </aside>
  );
}
