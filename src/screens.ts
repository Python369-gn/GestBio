
export function getSidebar(activePage: string) {
    const items = [
        { id: 'dashboard', icon: 'dashboard', label: 'Tableau de bord' },
        { id: 'students', icon: 'group', label: 'Étudiants' },
        { id: 'books', icon: 'book', label: 'Ouvrages' },
        { id: 'attendance', icon: 'event_available', label: 'Présences' },
        { id: 'stats', icon: 'insert_chart', label: 'Statistiques' },
        { id: 'interface', icon: 'admin_panel_settings', label: 'Interface Bibliothécaire' },
    ];

    return `
        <aside class="w-[260px] h-full fixed left-0 top-0 bg-primary flex flex-col py-4 px-1 border-r border-outline-variant z-50">
            <div class="px-4 mb-8">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-primary-fixed flex items-center justify-center rounded">
                        <span class="material-symbols-outlined text-primary">account_balance</span>
                    </div>
                    <div>
                        <h1 class="text-lg font-bold text-on-primary">Gest Biblio</h1>
                        <p class="text-xs text-on-primary/60">Administration Centrale</p>
                    </div>
                </div>
            </div>
            <nav class="flex-grow space-y-1">
                ${items.map(item => `
                    <button onclick="navigate('${item.id}')" 
                        class="w-full flex items-center gap-3 px-4 py-3 transition-colors ${activePage === item.id ? 'bg-secondary text-white border-l-4 border-primary-fixed' : 'text-on-primary/70 hover:bg-secondary hover:text-on-primary'}">
                        <span class="material-symbols-outlined">${item.icon}</span>
                        <span class="text-sm">${item.label}</span>
                    </button>
                `).join('')}
            </nav>
            <div class="mt-auto border-t border-on-primary/10 pt-4 space-y-1">
                <button class="w-full flex items-center gap-3 px-4 py-3 text-on-primary/70 hover:bg-secondary hover:text-on-primary transition-colors">
                    <span class="material-symbols-outlined">settings</span>
                    <span class="text-sm">Paramètres</span>
                </button>
                <button onclick="navigate('login')" class="w-full flex items-center gap-3 px-4 py-3 text-on-primary/70 hover:bg-secondary hover:text-on-primary transition-colors">
                    <span class="material-symbols-outlined">logout</span>
                    <span class="text-sm">Déconnexion</span>
                </button>
            </div>
        </aside>
    `;
}

export function getTopBar(userType: string = 'Profil Administrateur') {
    return `
        <header class="h-16 sticky top-0 z-40 bg-surface-container-lowest flex justify-between items-center px-6 w-full border-b border-outline-variant">
            <div class="flex items-center gap-6 flex-1">
                <div class="relative w-full max-w-md">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                    <input type="text" class="w-full bg-surface-container-low border-none rounded-lg pl-10 py-2 text-sm focus:ring-2 focus:ring-primary" placeholder="Rechercher...">
                </div>
            </div>
            <div class="flex items-center gap-4">
                <button class="p-2 text-on-surface-variant hover:text-primary transition-all">
                    <span class="material-symbols-outlined">notifications</span>
                </button>
                <button class="p-2 text-on-surface-variant hover:text-primary transition-all">
                    <span class="material-symbols-outlined">calendar_today</span>
                </button>
                <div class="h-8 w-px bg-outline-variant mx-2"></div>
                <div class="flex items-center gap-3">
                    <span class="text-[11px] font-bold uppercase text-primary">${userType}</span>
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" class="w-10 h-10 rounded-full object-cover border border-outline-variant">
                </div>
            </div>
        </header>
    `;
}

export const screens = {
    login: () => `
        <div class="min-h-screen flex items-center justify-center p-4 administrative-pattern relative overflow-hidden">
            <!-- Background Decoration -->
            <div class="hidden lg:block absolute right-12 bottom-12 opacity-10 select-none pointer-events-none">
                <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400" alt="Institutional Logo" class="w-[300px] h-auto grayscale rounded-lg">
            </div>
            
            <main class="w-full max-w-[440px] relative z-10">
                <div class="bg-surface-container-lowest border border-outline-variant shadow-lg rounded-xl overflow-hidden">
                    <div class="bg-primary-container p-10 flex flex-col items-center text-center">
                        <div class="mb-6 flex items-center justify-center w-20 h-20 bg-on-primary rounded-full shadow-inner">
                            <span class="material-symbols-outlined text-[48px] text-primary-container" style="font-variation-settings: 'FILL' 1;">account_balance</span>
                        </div>
                        <h1 class="text-2xl font-bold text-on-primary mb-2">Gest Biblio</h1>
                        <p class="text-sm text-on-primary-container max-w-[280px]">Bienvenue au Système de Gestion de la Bibliothèque</p>
                    </div>
                    <form onsubmit="event.preventDefault(); navigate('dashboard')" class="p-10 space-y-6">
                        <div class="space-y-2">
                            <label class="block text-[11px] font-bold text-on-surface-variant uppercase">Nom d'utilisateur *</label>
                            <div class="relative">
                                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">person</span>
                                <input type="text" class="block w-full pl-10 pr-3 py-3 border border-outline-variant rounded bg-surface text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="ex: admin_central" required>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <div class="flex justify-between items-center">
                                <label class="block text-[11px] font-bold text-on-surface-variant uppercase">Mot de passe *</label>
                                <a href="#" class="text-xs text-primary hover:underline">Oublié ?</a>
                            </div>
                            <div class="relative">
                                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">lock</span>
                                <input type="password" class="block w-full pl-10 pr-3 py-3 border border-outline-variant rounded bg-surface text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="••••••••" required>
                            </div>
                        </div>
                        <button type="submit" class="w-full bg-primary-container text-on-primary py-3 px-4 rounded font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-2 group">
                            <span>Se connecter</span>
                            <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                        <div class="pt-4 border-t border-outline-variant">
                            <div class="flex items-start gap-3 p-3 bg-surface-container-low rounded">
                                <span class="material-symbols-outlined text-on-surface-variant text-[20px]">verified_user</span>
                                <p class="text-xs text-on-surface-variant leading-tight">Accès restreint au personnel autorisé. Toutes les sessions sont enregistrées.</p>
                            </div>
                        </div>
                    </form>
                </div>
                <footer class="mt-8 text-center space-y-2">
                    <p class="text-xs text-outline">© 2024 Gest Biblio - République de Guinée</p>
                    <div class="flex justify-center gap-4">
                        <a href="#" class="text-[11px] font-bold text-on-surface-variant hover:text-primary uppercase">Assistance</a>
                        <span class="text-outline-variant">•</span>
                        <a href="#" class="text-[11px] font-bold text-on-surface-variant hover:text-primary uppercase">Confidentialité</a>
                    </div>
                </footer>
            </main>
        </div>
    `,
    dashboard: () => `
        <div class="flex min-h-screen">
            ${getSidebar('dashboard')}
            <main class="flex-grow ml-[260px]">
                ${getTopBar()}
                <div class="p-6 space-y-6">
                    <div class="flex items-baseline justify-between">
                        <h2 class="text-lg font-bold text-primary">Vue d'ensemble de l'activité</h2>
                        <span class="text-xs text-on-surface-variant">Dernière mise à jour: Aujourd'hui, 10:45</span>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        ${renderStatCard('person', '+4.2%', 'Étudiants Inscrits', '12,458', 'bg-primary-fixed')}
                        ${renderStatCard('login', 'Aujourd\'hui', 'Visites du jour', '842', 'bg-secondary-fixed')}
                        ${renderStatCard('menu_book', 'Total: 45k', 'Ouvrages Disponibles', '38,210', 'bg-tertiary-fixed')}
                        ${renderStatCard('outbound', '+12 en attente', 'Livres Empruntés', '6,790', 'bg-error-container', 'text-error')}
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div class="lg:col-span-2 bg-surface-container-lowest border border-outline-variant p-6 rounded-lg">
                            <h3 class="font-bold mb-6">Fréquentation de la Bibliothèque</h3>
                            <div class="h-64 flex items-end justify-between gap-2 border-b border-outline-variant pb-2 px-4">
                                ${[40, 60, 55, 85, 70, 90, 65, 45, 50, 95, 80, 75].map(h => `
                                    <div class="w-full bg-primary-container/20 rounded-t-sm" style="height: ${h}%"></div>
                                `).join('')}
                            </div>
                            <div class="flex justify-between mt-4 px-4 text-[10px] font-bold text-on-surface-variant">
                                <span>JAN</span><span>FÉV</span><span>MAR</span><span>AVR</span><span>MAI</span><span>JUN</span>
                                <span>JUL</span><span>AOU</span><span>SEP</span><span>OCT</span><span>NOV</span><span>DÉC</span>
                            </div>
                        </div>
                        <div class="bg-surface-container-lowest border border-outline-variant flex flex-col rounded-lg">
                            <div class="p-4 border-b border-outline-variant flex items-center justify-between">
                                <h3 class="font-bold">Alertes & Retards</h3>
                                <span class="bg-error text-on-primary text-[10px] px-2 py-1 rounded">12 Critiques</span>
                            </div>
                            <div class="flex-grow overflow-y-auto max-h-[350px] p-4 space-y-4">
                                ${renderAlert('Mamadou Bah', 'Le Petit Prince', 'Retard: 8 jours')}
                                ${renderAlert('Mariama Sylla', 'Droit Constitutionnel', 'Retard: 5 jours')}
                                ${renderAlert('Ibrahima Diallo', 'Physique Quantique', 'Échéance: Demain', false)}
                            </div>
                            <button class="w-full p-4 text-primary text-[11px] font-bold uppercase border-t border-outline-variant hover:bg-surface-container transition-colors">Voir tous les litiges</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    `,
    students: () => `
        <div class="flex min-h-screen">
            ${getSidebar('students')}
            <main class="flex-grow ml-[260px]">
                ${getTopBar()}
                <div class="p-6 space-y-6">
                    <div class="flex justify-between items-end">
                        <div>
                            <p class="text-xs text-on-surface-variant mb-1">Dashboard / <span class="text-primary font-semibold">Gestion des Étudiants</span></p>
                            <h2 class="text-lg font-bold text-primary">Registre des Étudiants</h2>
                        </div>
                        <div class="flex gap-2">
                             <button class="px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded text-xs font-semibold hover:bg-surface-container transition-colors flex items-center gap-2">
                                <span class="material-symbols-outlined text-sm">download</span> Exporter
                            </button>
                            <button class="px-4 py-2 bg-primary text-on-primary rounded text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                                <span class="material-symbols-outlined text-sm">person_add</span> Ajouter un étudiant
                            </button>
                        </div>
                    </div>
                    
                    <div class="bg-surface-container-lowest border border-outline-variant p-4 flex flex-wrap gap-4 items-center rounded-lg">
                        <div class="flex flex-col gap-1">
                            <label class="text-[10px] font-bold uppercase text-on-surface-variant">Département</label>
                            <select class="bg-white border border-outline-variant rounded px-3 py-1.5 text-xs">
                                <option>Tous les départements</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-1">
                            <label class="text-[10px] font-bold uppercase text-on-surface-variant">Statut</label>
                            <select class="bg-white border border-outline-variant rounded px-3 py-1.5 text-xs">
                                <option>Tous les statuts</option>
                            </select>
                        </div>
                        <button class="ml-auto text-primary text-xs font-semibold flex items-center gap-1">
                            <span class="material-symbols-outlined text-sm">filter_list_off</span> Réinitialiser
                        </button>
                    </div>

                    <div class="bg-white border border-outline-variant rounded-lg overflow-hidden">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-surface-container-low border-b border-outline-variant">
                                    <th class="px-4 py-3 text-[10px] font-bold uppercase text-on-surface-variant">Nom Complet</th>
                                    <th class="px-4 py-3 text-[10px] font-bold uppercase text-on-surface-variant">ID Étudiant</th>
                                    <th class="px-4 py-3 text-[10px] font-bold uppercase text-on-surface-variant">Département</th>
                                    <th class="px-4 py-3 text-[10px] font-bold uppercase text-on-surface-variant">Statut</th>
                                    <th class="px-4 py-3 text-[10px] font-bold uppercase text-on-surface-variant text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="text-sm divide-y divide-outline-variant">
                                ${renderStudentRow('Mamadou Barry', 'm.barry@univ.gn', '#2024-UG-00124', 'Génie Informatique', 'Actif')}
                                ${renderStudentRow('Aissatou Sow', 'a.sow@univ.gn', '#2024-UG-00892', 'Médecine', 'Actif')}
                                ${renderStudentRow('Camara Kadiatou', 'c.kadi@univ.gn', '#2024-UG-01445', 'Droit Public', 'Suspendu', 'bg-error-container text-error')}
                                ${renderStudentRow('Oumar Diallo', 'o.diallo@univ.gn', '#2024-UG-00054', 'Économie', 'Actif')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    `,
    books: () => `
        <div class="flex min-h-screen">
            ${getSidebar('books')}
            <main class="flex-grow ml-[260px]">
                ${getTopBar()}
                <div class="p-6 space-y-6">
                    <div class="flex justify-between items-center">
                        <h2 class="text-lg font-bold text-primary">Catalogue des Ouvrages</h2>
                        <button class="bg-primary text-on-primary px-6 py-2 rounded text-xs font-bold flex items-center gap-2">
                             <span class="material-symbols-outlined text-sm">add</span> Ajouter un ouvrage
                        </button>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-white p-4 border border-outline-variant rounded flex items-center gap-4">
                            <div class="p-3 bg-secondary-container rounded text-on-secondary-container">
                                <span class="material-symbols-outlined">library_books</span>
                            </div>
                            <div>
                                <p class="text-[10px] uppercase text-on-surface-variant">Total Ouvrages</p>
                                <p class="text-xl font-bold text-primary">12,840</p>
                            </div>
                        </div>
                        <div class="bg-white p-4 border border-outline-variant rounded flex items-center gap-4">
                            <div class="p-3 bg-tertiary-fixed rounded text-on-tertiary-fixed">
                                <span class="material-symbols-outlined">assignment_return</span>
                            </div>
                            <div>
                                <p class="text-[10px] uppercase text-on-surface-variant">Emprunts en cours</p>
                                <p class="text-xl font-bold text-primary">432</p>
                            </div>
                        </div>
                        <div class="bg-white p-4 border border-outline-variant rounded flex items-center gap-4">
                            <div class="p-3 bg-error-container rounded text-error">
                                <span class="material-symbols-outlined">report_problem</span>
                            </div>
                            <div>
                                <p class="text-[10px] uppercase text-on-surface-variant">Retards</p>
                                <p class="text-xl font-bold text-error">15</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white border border-outline-variant rounded-lg overflow-hidden">
                        <table class="w-full text-left border-collapse">
                             <thead class="bg-surface-container-low border-b border-outline-variant">
                                <tr class="text-[10px] font-bold uppercase text-on-surface-variant">
                                    <th class="px-4 py-3">Titre</th>
                                    <th class="px-4 py-3">Auteur</th>
                                    <th class="px-4 py-3">ISBN</th>
                                    <th class="px-4 py-3">Status</th>
                                    <th class="px-4 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="text-sm divide-y divide-outline-variant">
                                ${renderBookRow('Constitution de la Guinée', 'Archives Nationales', '978-2-342', 'Disponible')}
                                ${renderBookRow('Macroéconomie Appliquée', 'Mamadou Bah', '978-2-123', 'Emprunté', 'bg-tertiary-fixed text-on-tertiary-fixed')}
                                ${renderBookRow('Anatomie Humaine Vol. I', 'Dr. Diallo S.', '978-3-888', 'Disponible')}
                                ${renderBookRow('Histoire de la Guinée', 'Camara L.', '978-1-555', 'Disponible')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    `,
    attendance: () => `
        <div class="flex min-h-screen">
            ${getSidebar('attendance')}
            <main class="flex-grow ml-[260px]">
                ${getTopBar()}
                <div class="p-6">
                    <div class="grid grid-cols-12 gap-6">
                        <section class="col-span-12 lg:col-span-4 space-y-6">
                            <div class="bg-white border border-outline-variant rounded-lg p-6">
                                <h3 class="font-bold text-primary mb-6">Contrôle d'Entrée</h3>
                                <div class="aspect-square bg-surface border-2 border-dashed border-outline-variant rounded flex flex-col items-center justify-center relative mb-6">
                                    <span class="material-symbols-outlined text-5xl text-outline mb-2">qr_code_scanner</span>
                                    <p class="text-[10px] font-bold uppercase text-outline">Scanner le QR Code</p>
                                </div>
                                <div class="space-y-4">
                                     <div>
                                        <label class="block text-[10px] font-bold text-on-surface-variant uppercase mb-1">Identifiant Étudiant</label>
                                        <div class="flex gap-2">
                                            <input type="text" class="flex-1 border border-outline-variant rounded px-3 py-2 text-sm outline-none" placeholder="Ex: MAT-2024-001">
                                            <button class="bg-primary text-on-primary px-4 py-2 rounded text-[10px] font-bold uppercase">Valider</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white border border-outline-variant rounded-lg p-6 flex justify-between gap-4">
                                <div class="flex-1 p-3 bg-surface-container rounded border border-outline-variant/30">
                                    <p class="text-[10px] text-on-surface-variant uppercase mb-1">Entrées</p>
                                    <p class="text-2xl font-bold text-primary">142</p>
                                </div>
                                <div class="flex-1 p-3 bg-surface-container rounded border border-outline-variant/30">
                                    <p class="text-[10px] text-on-surface-variant uppercase mb-1">Actuels</p>
                                    <p class="text-2xl font-bold text-primary">38</p>
                                </div>
                            </div>
                        </section>
                        <section class="col-span-12 lg:col-span-8 space-y-6">
                             <div class="bg-white border border-outline-variant rounded-lg overflow-hidden">
                                <div class="p-4 bg-surface-container-low border-b border-outline-variant flex justify-between items-center">
                                    <span class="font-bold">Journal des Présences</span>
                                    <button class="text-primary text-xs font-bold border border-primary/20 px-3 py-1 rounded">EXPORTER PDF</button>
                                </div>
                                <table class="w-full text-sm">
                                    <thead>
                                        <tr class="bg-surface-container-low/50 text-[10px] uppercase font-bold text-on-surface-variant border-b border-outline-variant">
                                            <th class="px-4 py-3">Heure</th>
                                            <th class="px-4 py-3">Étudiant</th>
                                            <th class="px-4 py-3">Action</th>
                                            <th class="px-4 py-3 text-right">Statut</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-outline-variant">
                                        ${renderAttendanceRow('10:45', 'Alpha BALDÉ', 'Entrée', 'Autorisé', 'bg-green-100 text-green-800')}
                                        ${renderAttendanceRow('10:38', 'Mariam CAMARA', 'Sortie', 'Terminé', 'bg-blue-100 text-blue-800')}
                                        ${renderAttendanceRow('10:22', 'Ousmane DIALLO', 'Entrée', 'Alerte Frais', 'bg-error-container text-error')}
                                        ${renderAttendanceRow('10:15', 'Fatoumata KEITA', 'Entrée', 'Autorisé', 'bg-green-100 text-green-800')}
                                    </tbody>
                                </table>
                             </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    `,
    stats: () => `
         <div class="flex min-h-screen">
            ${getSidebar('stats')}
            <main class="flex-grow ml-[260px]">
                ${getTopBar()}
                <div class="p-6 space-y-6">
                    <h2 class="text-lg font-bold text-primary">Rapports et Statistiques</h2>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div class="bg-white p-6 border border-outline-variant rounded-lg">
                            <p class="text-[11px] font-bold text-on-surface-variant uppercase mb-2">Total Emprunts</p>
                            <div class="flex items-end gap-2">
                                <span class="text-2xl font-bold text-primary">12,482</span>
                                <span class="text-xs text-green-600 font-bold mb-1">↑ 12%</span>
                            </div>
                        </div>
                        <div class="bg-white p-6 border border-outline-variant rounded-lg">
                            <p class="text-[11px] font-bold text-on-surface-variant uppercase mb-2">Fréquentation Hebdo</p>
                            <div class="flex items-end gap-2">
                                <span class="text-2xl font-bold text-primary">2,150</span>
                                <span class="text-xs text-error font-bold mb-1">↓ 3%</span>
                            </div>
                        </div>
                         <div class="bg-white p-6 border border-outline-variant rounded-lg">
                            <p class="text-[11px] font-bold text-on-surface-variant uppercase mb-2">Satisfaction</p>
                            <div class="flex items-end gap-2">
                                <span class="text-2xl font-bold text-primary">94%</span>
                                <span class="text-xs text-green-600 font-bold mb-1">stable</span>
                            </div>
                        </div>
                        <div class="bg-white p-6 border border-outline-variant rounded-lg">
                            <p class="text-[11px] font-bold text-on-surface-variant uppercase mb-2">Budget Livre</p>
                            <div class="flex items-end gap-2">
                                <span class="text-2xl font-bold text-primary">2.4M</span>
                                <span class="text-xs text-green-600 font-bold mb-1">↑ 5%</span>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div class="bg-white border border-outline-variant p-6 rounded-lg">
                            <h3 class="font-bold mb-4">Répartition par Faculté</h3>
                            <div class="flex items-center gap-8">
                                <div class="w-32 h-32 rounded-full border-[12px] border-primary border-t-secondary relative flex items-center justify-center">
                                    <span class="text-lg font-bold">8.4k</span>
                                </div>
                                <div class="space-y-2 flex-grow">
                                    ${renderProgress('Droit', 42, 'bg-primary')}
                                    ${renderProgress('Médecine', 28, 'bg-secondary')}
                                    ${renderProgress('Informatique', 18, 'bg-primary-fixed')}
                                    ${renderProgress('Autres', 12, 'bg-outline-variant')}
                                </div>
                            </div>
                        </div>
                         <div class="bg-white border border-outline-variant p-6 rounded-lg">
                            <h3 class="font-bold mb-4">Taux de retour</h3>
                            <div class="h-48 flex items-end justify-between gap-4 border-b border-outline-variant px-2">
                                ${Array.from({ length: 7 }).map((_, i) => `
                                    <div class="w-full bg-secondary-container rounded-t-sm" style="height: ${40 + Math.random() * 50}%"></div>
                                `).join('')}
                            </div>
                            <div class="flex justify-between mt-2 text-[10px] font-bold text-on-surface-variant">
                                <span>LUN</span><span>MAR</span><span>MER</span><span>JEU</span><span>VEN</span><span>SAM</span><span>DIM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
         </div>
    `,
    interface: () => `
        <div class="flex min-h-screen">
            ${getSidebar('interface')}
            <main class="flex-grow ml-[260px]">
                ${getTopBar('Interface Bibliothécaire')}
                <div class="p-6 space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <button class="flex flex-col items-center justify-center p-8 bg-primary text-on-primary rounded-xl hover:opacity-90 transition-all">
                             <span class="material-symbols-outlined text-4xl mb-3">input</span>
                             <span class="font-bold">Enregistrer un emprunt</span>
                        </button>
                        <button class="flex flex-col items-center justify-center p-8 bg-white border border-outline-variant text-primary rounded-xl hover:bg-surface transition-all">
                             <span class="material-symbols-outlined text-4xl mb-3">keyboard_return</span>
                             <span class="font-bold">Retour de livre</span>
                        </button>
                        <button class="flex flex-col items-center justify-center p-8 bg-white border border-outline-variant text-primary rounded-xl hover:bg-surface transition-all">
                             <span class="material-symbols-outlined text-4xl mb-3">manage_accounts</span>
                             <span class="font-bold">Gestion des comptes</span>
                        </button>
                    </div>

                    <div class="bg-white border border-outline-variant rounded-lg overflow-hidden">
                        <div class="p-4 border-b border-outline-variant flex items-center justify-between">
                            <h3 class="font-bold">Dernières opérations</h3>
                            <button class="text-primary text-xs font-bold hover:underline">Tout voir</button>
                        </div>
                        <div class="divide-y divide-outline-variant">
                            ${renderOpRow('Alpha Baldé', 'Constitution de la Guinée', 'Emprunt', '10:45')}
                            ${renderOpRow('Mariam Camara', 'Macroéconomie', 'Retour', '10:38')}
                            ${renderOpRow('Ibrahima Diallo', 'Physique Quantique', 'Emprunt', '10:22')}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    `
};

// Helpers for repetitive HTML
function renderStatCard(icon: string, change: string, label: string, value: string, iconBg: string, changeColor: string = 'text-green-700') {
    return `
        <div class="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg flex flex-col gap-2">
            <div class="flex justify-between items-start">
                <span class="material-symbols-outlined text-primary p-2 ${iconBg} rounded">${icon}</span>
                <span class="text-[10px] font-bold ${changeColor} bg-surface-container-high px-2 py-0.5 rounded">${change}</span>
            </div>
            <span class="text-xs text-on-surface-variant">${label}</span>
            <span class="text-2xl font-bold text-primary">${value}</span>
        </div>
    `;
}

function renderAlert(name: string, book: string, time: string, isError: boolean = true) {
    return `
        <div class="flex gap-3 p-2 hover:bg-surface-container transition-colors rounded">
            <span class="material-symbols-outlined ${isError ? 'text-error' : 'text-on-tertiary-container'}">${isError ? 'warning' : 'info'}</span>
            <div class="flex flex-col">
                <span class="text-sm font-bold">${name}</span>
                <span class="text-xs text-on-surface-variant italic">"${book}"</span>
                <span class="text-[10px] font-bold ${isError ? 'text-error' : 'text-on-tertiary-container'} mt-1">${time}</span>
            </div>
        </div>
    `;
}

function renderStudentRow(name: string, email: string, id: string, dept: string, status: string, statusClass: string = 'bg-green-100 text-green-800') {
    return `
        <tr class="hover:bg-surface-container transition-colors">
            <td class="px-4 py-3">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center text-primary font-bold text-xs">${name.split(' ').map(n=>n[0]).join('')}</div>
                    <div>
                        <div class="font-bold">${name}</div>
                        <div class="text-[10px] text-on-surface-variant">${email}</div>
                    </div>
                </div>
            </td>
            <td class="px-4 py-3 text-on-surface-variant">${id}</td>
            <td class="px-4 py-3">${dept}</td>
            <td class="px-4 py-3">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${statusClass}">${status}</span>
            </td>
            <td class="px-4 py-3 text-right">
                <button class="text-primary material-symbols-outlined text-lg">edit</button>
            </td>
        </tr>
    `;
}

function renderBookRow(title: string, author: string, isbn: string, status: string, statusClass: string = 'bg-secondary-container text-on-secondary-container') {
    return `
        <tr class="hover:bg-surface-container transition-colors">
            <td class="px-4 py-4 font-semibold text-primary">${title}</td>
            <td class="px-4 py-4 text-xs">${author}</td>
            <td class="px-4 py-4 text-xs font-mono">${isbn}</td>
            <td class="px-4 py-4">
                <span class="px-2 py-1 rounded text-[10px] font-bold uppercase ${statusClass}">${status}</span>
            </td>
            <td class="px-4 py-4 text-right">
                <button class="text-outline material-symbols-outlined text-lg hover:text-primary">more_vert</button>
            </td>
        </tr>
    `;
}

function renderAttendanceRow(time: string, student: string, action: string, status: string, statusClass: string) {
    return `
        <tr>
            <td class="px-4 py-3 font-bold text-primary">${time}</td>
            <td class="px-4 py-3">${student}</td>
            <td class="px-4 py-3 text-xs">${action}</td>
            <td class="px-4 py-3 text-right text-[10px]">
                <span class="px-2 py-0.5 rounded font-bold uppercase ${statusClass}">${status}</span>
            </td>
        </tr>
    `;
}

function renderProgress(label: string, value: number, color: string) {
    return `
        <div class="space-y-1">
            <div class="flex justify-between text-[10px] font-bold uppercase">
                <span>${label}</span>
                <span>${value}%</span>
            </div>
            <div class="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div class="${color} h-full" style="width: ${value}%"></div>
            </div>
        </div>
    `;
}

function renderOpRow(name: string, book: string, type: string, time: string) {
    return `
        <div class="flex items-center justify-between p-4 hover:bg-surface transition-colors">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-primary">${name[0]}</div>
                <div>
                    <p class="text-sm font-bold">${name} <span class="font-normal text-xs text-on-surface-variant">• ${type}</span></p>
                    <p class="text-xs italic text-on-surface-variant">"${book}"</p>
                </div>
            </div>
            <span class="text-xs font-bold text-primary">${time}</span>
        </div>
    `;
}
