src/
├─ app/
│  ├─ core/                          # Singletons: app-wide services & config (providedIn:'root')
│  │  ├─ interceptors/
│  │  │  ├─ auth-token.interceptor.ts
│  │  │  └─ error.interceptor.ts
│  │  ├─ guards/
│  │  │  ├─ auth.guard.ts
│  │  │  └─ role.guard.ts
│  │  ├─ services/
│  │  │  ├─ http/
│  │  │  │  └─ api-client.service.ts
│  │  │  ├─ auth.service.ts
│  │  │  └─ app-config.service.ts
│  │  ├─ config/
│  │  │  └─ app.config.ts            # provideHttpClient, interceptors, PrimeNG configs, etc.
│  │  └─ _core.index.ts              # (optional) barrel
│  │
│  ├─ shared/                        # Reusable UI & pure utilities (NO app state)
│  │  ├─ ui/                         # Dumb/presentational components
│  │  │  ├─ button/
│  │  │  │  ├─ button.component.ts
│  │  │  │  └─ button.component.html
│  │  │  ├─ form-field/
│  │  │  └─ toast/                   # wrapper around p-toast
│  │  ├─ directives/
│  │  │  └─ autofocus.directive.ts
│  │  ├─ pipes/
│  │  │  └─ title-case.pipe.ts
│  │  ├─ utils/
│  │  │  ├─ validators/
│  │  │  │  └─ password.validator.ts
│  │  │  └─ date.util.ts
│  │  ├─ models/
│  │  │  └─ user.model.ts
│  │  └─ shared.index.ts             # (optional) barrel
│  │
│  ├─ features/                      # Route-scoped features (lazy-load each)
│  │  ├─ auth/
│  │  │  ├─ login/
│  │  │  │  ├─ login.page.ts         # page (container) – standalone
│  │  │  │  └─ login.page.html
│  │  │  ├─ register/
│  │  │  ├─ components/              # subcomponents used only in auth
│  │  │  │  └─ login-form/
│  │  │  │     ├─ login-form.component.ts
│  │  │  │     └─ login-form.component.html
│  │  │  ├─ data-access/             # feature-specific services (if any)
│  │  │  │  └─ auth.api.ts
│  │  │  └─ routes.ts                # feature child routes
│  │  ├─ dashboard/
│  │  │  ├─ dashboard.page.ts
│  │  │  ├─ components/
│  │  │  │  └─ stats-card/
│  │  │  └─ routes.ts
│  │  └─ search/
│  │     ├─ search.page.ts
│  │     ├─ components/
│  │     └─ routes.ts
│  │
│  ├─ app.routes.ts                  # top-level routes (lazy load features)
│  └─ app.component.ts               # shell layout (navbar/sidebar/footer)
│
├─ assets/
│  ├─ i18n/
│  └─ images/
├─ environments/
│  ├─ environment.ts
│  └─ environment.prod.ts
└─ styles.css (or .scss)
