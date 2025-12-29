// Données des cliniques/établissements
const CLINIQUES_DATA = [
    {
        id: 1,
        name: "Clinique Priorité Santé - Kaloum",
        type: "Clinique Principale",
        specialties: ["Médecine Générale", "Chirurgie", "Urgences", "Maternité"],
        description: "Notre établissement principal situé au cœur de Conakry, équipé des dernières technologies médicales.",
        address: {
            street: "Avenue de la République",
            district: "Kaloum",
            landmark: "Face à la Banque Centrale",
            city: "Conakry",
            coordinates: { lat: 9.5092, lng: -13.7122 }
        },
        contact: {
            phone: "+224 622 123 456",
            emergency: "+224 622 999 888",
            email: "kaloum@prioritesante.gn",
            website: "www.prioritesante.gn"
        },
        hours: {
            consultations: "Lun-Ven: 7h-20h, Sam: 8h-18h, Dim: 9h-16h",
            emergency: "24h/24 - 7j/7",
            laboratory: "Lun-Ven: 6h-19h, Sam-Dim: 7h-17h",
            pharmacy: "Lun-Ven: 7h30-19h30, Sam-Dim: 8h-18h"
        },
        facilities: ["Urgences 24h/24", "Bloc opératoire", "Laboratoire", "Pharmacie", "Maternité", "Radiologie"],
        capacity: "120 lits",
        established: "1995",
        director: "Dr. Mamadou Sylla",
        image: "clinique-kaloum.svg",
        rating: 4.8,
        patients_per_year: "25000+"
    },
    {
        id: 2,
        name: "Centre Médical Priorité Santé - Matam",
        type: "Centre Médical",
        specialties: ["Médecine Générale", "Pédiatrie", "Gynécologie", "Cardiologie"],
        description: "Centre médical moderne spécialisé dans les soins ambulatoires et les consultations spécialisées.",
        address: {
            street: "Route de Donka",
            district: "Matam",
            landmark: "Près du Rond-point Hamdallaye",
            city: "Conakry",
            coordinates: { lat: 9.5234, lng: -13.6789 }
        },
        contact: {
            phone: "+224 622 234 567",
            emergency: "+224 622 888 999",
            email: "matam@prioritesante.gn",
            website: "www.prioritesante.gn/matam"
        },
        hours: {
            consultations: "Lun-Ven: 8h-19h, Sam: 8h-17h",
            emergency: "Lun-Dim: 8h-22h",
            laboratory: "Lun-Ven: 7h-18h, Sam: 8h-16h",
            pharmacy: "Lun-Ven: 8h-19h, Sam: 8h-17h"
        },
        facilities: ["Consultations spécialisées", "Laboratoire", "Pharmacie", "Échographie", "ECG"],
        capacity: "40 lits",
        established: "2008",
        director: "Dr. Aissatou Barry",
        image: "centre-matam.svg",
        rating: 4.6,
        patients_per_year: "15000+"
    },
    {
        id: 3,
        name: "Polyclinique Priorité Santé - Ratoma",
        type: "Polyclinique",
        specialties: ["Chirurgie Ambulatoire", "Orthopédie", "Ophtalmologie", "Dermatologie"],
        description: "Polyclinique spécialisée dans la chirurgie ambulatoire et les soins spécialisés de pointe.",
        address: {
            street: "Avenue Fidel Castro",
            district: "Ratoma",
            landmark: "Près de l'Université Kofi Annan",
            city: "Conakry",
            coordinates: { lat: 9.5456, lng: -13.6234 }
        },
        contact: {
            phone: "+224 622 345 678",
            emergency: "+224 622 777 888",
            email: "ratoma@prioritesante.gn",
            website: "www.prioritesante.gn/ratoma"
        },
        hours: {
            consultations: "Lun-Ven: 8h-18h, Sam: 8h-16h",
            emergency: "Lun-Dim: 8h-20h",
            laboratory: "Lun-Ven: 7h-17h, Sam: 8h-15h",
            pharmacy: "Lun-Ven: 8h-18h, Sam: 8h-16h"
        },
        facilities: ["Chirurgie ambulatoire", "Bloc opératoire", "Laboratoire", "Pharmacie", "Scanner"],
        capacity: "60 lits",
        established: "2012",
        director: "Dr. Ibrahima Sow",
        image: "polyclinique-ratoma.svg",
        rating: 4.7,
        patients_per_year: "18000+"
    },
    {
        id: 4,
        name: "Centre de Santé Priorité - Dixinn",
        type: "Centre de Santé",
        specialties: ["Médecine Générale", "Soins Infirmiers", "Vaccination", "Médecine Préventive"],
        description: "Centre de santé communautaire offrant des soins de base et de prévention pour toute la famille.",
        address: {
            street: "Boulevard du Commerce",
            district: "Dixinn",
            landmark: "Face au Marché de Dixinn",
            city: "Conakry",
            coordinates: { lat: 9.5678, lng: -13.6456 }
        },
        contact: {
            phone: "+224 622 456 789",
            emergency: "+224 622 666 777",
            email: "dixinn@prioritesante.gn",
            website: "www.prioritesante.gn/dixinn"
        },
        hours: {
            consultations: "Lun-Ven: 8h-17h, Sam: 8h-15h",
            emergency: "Lun-Dim: 8h-18h",
            laboratory: "Lun-Ven: 8h-16h",
            pharmacy: "Lun-Ven: 8h-17h, Sam: 8h-15h"
        },
        facilities: ["Consultations", "Soins infirmiers", "Vaccination", "Pharmacie", "Laboratoire de base"],
        capacity: "20 lits",
        established: "2015",
        director: "Dr. Mariama Bah",
        image: "centre-dixinn.svg",
        rating: 4.5,
        patients_per_year: "12000+"
    },
    {
        id: 5,
        name: "Clinique Spécialisée Priorité - Camayenne",
        type: "Clinique Spécialisée",
        specialties: ["Cardiologie", "Neurologie", "Oncologie", "Radiologie"],
        description: "Clinique hautement spécialisée avec équipements de pointe pour les pathologies complexes.",
        address: {
            street: "Corniche Sud",
            district: "Camayenne",
            landmark: "Près de l'Hôtel Camayenne",
            city: "Conakry",
            coordinates: { lat: 9.4890, lng: -13.7345 }
        },
        contact: {
            phone: "+224 622 567 890",
            emergency: "+224 622 555 666",
            email: "camayenne@prioritesante.gn",
            website: "www.prioritesante.gn/camayenne"
        },
        hours: {
            consultations: "Lun-Ven: 8h-19h, Sam: 9h-17h",
            emergency: "Lun-Dim: 8h-22h",
            laboratory: "Lun-Ven: 7h-18h, Sam: 8h-16h",
            pharmacy: "Lun-Ven: 8h-19h, Sam: 9h-17h"
        },
        facilities: ["IRM", "Scanner", "Laboratoire spécialisé", "Pharmacie", "Cardiologie interventionnelle"],
        capacity: "80 lits",
        established: "2018",
        director: "Dr. Alpha Condé",
        image: "clinique-camayenne.svg",
        rating: 4.9,
        patients_per_year: "20000+"
    },
    {
        id: 6,
        name: "Maternité Priorité Santé - Kipé",
        type: "Maternité Spécialisée",
        specialties: ["Obstétrique", "Gynécologie", "Néonatologie", "Pédiatrie"],
        description: "Maternité moderne dédiée à l'accompagnement des femmes et des nouveau-nés.",
        address: {
            street: "Route de Kipé",
            district: "Ratoma",
            landmark: "Près du Stade du 28 Septembre",
            city: "Conakry",
            coordinates: { lat: 9.5567, lng: -13.6123 }
        },
        contact: {
            phone: "+224 622 678 901",
            emergency: "+224 622 444 555",
            email: "kipe@prioritesante.gn",
            website: "www.prioritesante.gn/kipe"
        },
        hours: {
            consultations: "Lun-Ven: 8h-18h, Sam: 8h-16h",
            emergency: "24h/24 - 7j/7",
            laboratory: "Lun-Ven: 7h-18h, Sam-Dim: 8h-16h",
            pharmacy: "Lun-Ven: 8h-18h, Sam-Dim: 8h-16h"
        },
        facilities: ["Salles d'accouchement", "Néonatologie", "Laboratoire", "Pharmacie", "Échographie 4D"],
        capacity: "50 lits",
        established: "2020",
        director: "Dr. Hadja Kaba",
        image: "maternite-kipe.svg",
        rating: 4.8,
        patients_per_year: "8000+"
    }
];

let filteredCliniques = [...CLINIQUES_DATA];

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    renderCliniques(CLINIQUES_DATA);
    initializeSearch();
    updateResultsCounter();
});

// Afficher les cliniques
function renderCliniques(cliniques) {
    const grid = document.getElementById('cliniques-grid');
    
    if (cliniques.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <h3>Aucun établissement trouvé</h3>
                <p>Essayez de modifier vos critères de recherche.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = cliniques.map(clinique => `
        <div class="clinique-card" data-type="${clinique.type.toLowerCase()}">
            <div class="clinique-header">
                <div class="clinique-image">
                    <div class="clinique-icon">${getClinicIcon(clinique.type)}</div>
                    <div class="clinique-rating">
                        <span class="rating-stars">${'★'.repeat(Math.floor(clinique.rating))}${clinique.rating % 1 ? '☆' : ''}</span>
                        <span class="rating-number">${clinique.rating}</span>
                    </div>
                </div>
                <div class="clinique-badge">${clinique.type}</div>
            </div>
            
            <div class="clinique-info">
                <h3 class="clinique-name">${clinique.name}</h3>
                <p class="clinique-description">${clinique.description}</p>
                
                <div class="clinique-details">
                    <div class="detail-row">
                        <span class="detail-icon icon-location"></span>
                        <span><strong>Adresse:</strong> ${clinique.address.street}, ${clinique.address.district}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-icon icon-landmark"></span>
                        <span><strong>Repère:</strong> ${clinique.address.landmark}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-icon icon-doctor"></span>
                        <span><strong>Directeur:</strong> ${clinique.director}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-icon icon-hospital"></span>
                        <span><strong>Capacité:</strong> ${clinique.capacity}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-icon icon-calendar"></span>
                        <span><strong>Fondé en:</strong> ${clinique.established}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-icon icon-patients"></span>
                        <span><strong>Patients/an:</strong> ${clinique.patients_per_year}</span>
                    </div>
                </div>
                
                <div class="specialties-list">
                    <h4><span class="icon icon-stethoscope"></span> Spécialités:</h4>
                    <div class="specialty-tags">
                        ${clinique.specialties.map(spec => `<span class="specialty-tag">${spec}</span>`).join('')}
                    </div>
                </div>
                
                <div class="facilities-list">
                    <h4><span class="icon icon-hospital"></span> Équipements:</h4>
                    <div class="facility-tags">
                        ${clinique.facilities.map(facility => `<span class="facility-tag">${facility}</span>`).join('')}
                    </div>
                </div>
                
                <div class="contact-info">
                    <div class="contact-row">
                        <span class="contact-icon icon-phone"></span>
                        <span><strong>Standard:</strong> <a href="tel:${clinique.contact.phone}">${clinique.contact.phone}</a></span>
                    </div>
                    <div class="contact-row emergency">
                        <span class="contact-icon icon-emergency"></span>
                        <span><strong>Urgences:</strong> <a href="tel:${clinique.contact.emergency}">${clinique.contact.emergency}</a></span>
                    </div>
                    <div class="contact-row">
                        <span class="contact-icon icon-email"></span>
                        <span><strong>Email:</strong> <a href="mailto:${clinique.contact.email}">${clinique.contact.email}</a></span>
                    </div>
                </div>
                
                <div class="hours-summary">
                    <h4><span class="icon icon-clock"></span> Horaires:</h4>
                    <div class="hours-item">
                        <strong>Consultations:</strong> ${clinique.hours.consultations}
                    </div>
                    <div class="hours-item emergency">
                        <strong>Urgences:</strong> ${clinique.hours.emergency}
                    </div>
                </div>
                
                <div class="clinique-actions">
                    <a href="tel:${clinique.contact.phone}" class="action-btn primary">
                        <span class="icon icon-phone"></span> Appeler
                    </a>
                    <a href="mailto:${clinique.contact.email}" class="action-btn secondary">
                        <span class="icon icon-email"></span> Email
                    </a>
                    <a href="https://maps.google.com/?q=${clinique.address.coordinates.lat},${clinique.address.coordinates.lng}" target="_blank" class="action-btn tertiary">
                        <span class="icon icon-map"></span> Localiser
                    </a>
                    <a href="contact.html?clinique=${clinique.id}" class="action-btn success">
                        <span class="icon icon-calendar"></span> RDV
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Animation d'entrée
    setTimeout(() => {
        document.querySelectorAll('.clinique-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }, index * 100);
        });
    }, 100);
}

// Obtenir l'icône selon le type de clinique
function getClinicIcon(type) {
    const icons = {
        'Clinique Principale': '<span class="icon icon-hospital"></span>',
        'Centre Médical': '<span class="icon icon-building"></span>',
        'Polyclinique': '<span class="icon icon-clinic"></span>',
        'Centre de Santé': '<span class="icon icon-health-center"></span>',
        'Clinique Spécialisée': '<span class="icon icon-stethoscope"></span>',
        'Maternité Spécialisée': '<span class="icon icon-baby"></span>'
    };
    return icons[type] || '<span class="icon icon-hospital"></span>';
}

// Initialiser la recherche
function initializeSearch() {
    const searchInput = document.getElementById('clinique-search');
    const typeFilter = document.getElementById('type-filter');
    const districtFilter = document.getElementById('district-filter');
    
    // Recherche en temps réel
    searchInput.addEventListener('input', debounce(performSearch, 300));
    typeFilter.addEventListener('change', performSearch);
    districtFilter.addEventListener('change', performSearch);
}

// Fonction de recherche
function performSearch() {
    const searchTerm = document.getElementById('clinique-search').value.toLowerCase();
    const selectedType = document.getElementById('type-filter').value.toLowerCase();
    const selectedDistrict = document.getElementById('district-filter').value.toLowerCase();
    
    filteredCliniques = CLINIQUES_DATA.filter(clinique => {
        const matchesSearch = searchTerm === '' || 
            clinique.name.toLowerCase().includes(searchTerm) ||
            clinique.description.toLowerCase().includes(searchTerm) ||
            clinique.specialties.some(spec => spec.toLowerCase().includes(searchTerm)) ||
            clinique.address.district.toLowerCase().includes(searchTerm);
            
        const matchesType = selectedType === '' || 
            clinique.type.toLowerCase().includes(selectedType);
            
        const matchesDistrict = selectedDistrict === '' || 
            clinique.address.district.toLowerCase().includes(selectedDistrict);
            
        return matchesSearch && matchesType && matchesDistrict;
    });
    
    renderCliniques(filteredCliniques);
    updateResultsCounter();
}

// Fonction de recherche appelée par le bouton
function searchCliniques() {
    performSearch();
    
    // Scroll vers les résultats
    document.getElementById('cliniques-grid').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Mettre à jour le compteur de résultats
function updateResultsCounter() {
    const existingCounter = document.getElementById('results-counter');
    if (existingCounter) {
        existingCounter.remove();
    }
    
    const counter = document.createElement('div');
    counter.id = 'results-counter';
    counter.style.cssText = `
        text-align: center;
        margin: 2rem 0;
        padding: 1rem;
        background: var(--light-bg);
        border-radius: var(--border-radius-small);
        color: var(--text-light);
        font-weight: 500;
    `;
    
    const total = CLINIQUES_DATA.length;
    const filtered = filteredCliniques.length;
    
    if (filtered === total) {
        counter.innerHTML = `<span style="color: var(--primary-color);">${total} établissements</span> dans notre réseau`;
    } else {
        counter.innerHTML = `<span style="color: var(--primary-color);">${filtered}</span> établissement${filtered > 1 ? 's' : ''} trouvé${filtered > 1 ? 's' : ''} sur ${total}`;
    }
    
    const grid = document.getElementById('cliniques-grid');
    grid.parentNode.insertBefore(counter, grid);
}

// Fonction debounce pour optimiser la recherche
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}