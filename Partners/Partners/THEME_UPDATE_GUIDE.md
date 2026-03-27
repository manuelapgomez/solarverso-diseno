# 🎨 Theme System Update Guide

## ✅ Componentes ya actualizados:

### Partner:
- ✅ **UnifiedPartnerSidebar** - Sidebar con ThemeToggle integrado
- ✅ **UnifiedPartnerWorkspace** - Vista principal de oportunidades y actividad
- ✅ **TenderDetailView** - Vista de detalle de pliego
- ✅ **PartnerTenderApplication** - Formulario de postulación

### Admin:
- ✅ **AdminSidebar** - Sidebar admin con ThemeToggle
- ✅ **AdminDashboardSimplified** - Dashboard de pliegos
- ✅ **Login** - Página de login

### Shared:
- ✅ **ThemeContext** - Contexto global de temas
- ✅ **ThemeToggle** - Componente de switcher

## 📋 Componentes pendientes de actualizar:

### Partner:
- ⏳ **PartnerPerfil**
- ⏳ **PartnerProyectos**
- ⏳ **PartnerProjectDetail**

### Admin:
- ⏳ **AdminTenderDetail**
- ⏳ **AdminPartnerAudit**
- ⏳ **AdminTenderBuilder**
- ⏳ **AdminPartnerDirectory**
- ⏳ **AdminPartnerProfile**

## 🔧 Cómo actualizar un componente:

### Paso 1: Importar useTheme

```typescript
import { useTheme } from '../contexts/ThemeContext';
```

### Paso 2: Usar el hook en el componente

```typescript
export default function MyComponent() {
  const { theme, colors } = useTheme();
  
  // ... resto del componente
}
```

### Paso 3: Reemplazar colores hardcodeados

**Antes:**
```typescript
style={{
  backgroundColor: '#050505',
  color: '#FFFFFF',
  border: '1px solid rgba(255, 255, 255, 0.05)',
}}
```

**Después:**
```typescript
style={{
  backgroundColor: colors.canvasBackground,
  color: colors.textPrimary,
  border: `1px solid ${colors.border}`,
}}
```

## 🎨 Referencia de colores del Theme:

### Backgrounds:
- `colors.canvasBackground` - Fondo principal de la app
- `colors.panelBackground` - Fondo de paneles secundarios
- `colors.sidebarBackground` - Fondo del sidebar
- `colors.cardBackground` - Fondo de cards/tarjetas
- `colors.hoverBackground` - Fondo en hover

### Borders:
- `colors.border` - Border normal
- `colors.borderHover` - Border en hover

### Text:
- `colors.textPrimary` - Texto principal (títulos, content importante)
- `colors.textSecondary` - Texto secundario (subtítulos, labels)
- `colors.textTertiary` - Texto terciario (hints, placeholders)
- `colors.textDisabled` - Texto deshabilitado

### Accent (Brand):
- `colors.accent` - Solenium Cyan #1D99CC (siempre igual)
- `colors.accentHover` - Versión hover del accent

### Status:
- `colors.success` / `colors.successBg` - Verde (aprobado, éxito)
- `colors.error` / `colors.errorBg` - Rojo (error, rechazado)
- `colors.warning` / `colors.warningBg` - Naranja (advertencia)
- `colors.info` / `colors.infoBg` - Cyan (info, en proceso)

### Partner-specific:
- `colors.partnerAccent` - Verde partner
- `colors.partnerBorder` - Border verde partner

### Shadows:
- `colors.shadowSm` - Sombra pequeña
- `colors.shadowMd` - Sombra mediana
- `colors.shadowLg` - Sombra grande

## 📝 Patrones comunes:

### Container principal:
```typescript
<div
  className="flex min-h-screen"
  style={{
    backgroundColor: colors.canvasBackground,
  }}
>
```

### Card/Panel:
```typescript
<div
  className="p-6 rounded"
  style={{
    backgroundColor: colors.cardBackground,
    border: `1px solid ${colors.border}`,
    boxShadow: colors.shadowMd,
  }}
>
```

### Botón primario:
```typescript
<button
  style={{
    backgroundColor: colors.accent,
    color: '#FFFFFF',
    border: 'none',
  }}
>
```

### Botón secundario/outline:
```typescript
<button
  style={{
    backgroundColor: 'transparent',
    color: colors.accent,
    border: `1px solid ${colors.accent}`,
  }}
>
```

### Input field:
```typescript
<input
  style={{
    backgroundColor: colors.cardBackground,
    border: `1px solid ${colors.border}`,
    color: colors.textPrimary,
  }}
  onFocus={(e) => {
    e.target.style.borderColor = colors.accent;
  }}
  onBlur={(e) => {
    e.target.style.borderColor = colors.border;
  }}
/>
```

### Texto con jerarquía:
```typescript
<h1 style={{ color: colors.textPrimary }}>Título Principal</h1>
<h2 style={{ color: colors.textSecondary }}>Subtítulo</h2>
<p style={{ color: colors.textTertiary }}>Descripción</p>
```

## 🌓 Light vs Dark Mode valores:

| Variable | Dark Mode | Light Mode |
|----------|-----------|------------|
| canvasBackground | #050505 | #F5F7F8 |
| panelBackground | #0A0A0A | #FFFFFF |
| cardBackground | #121212 | #FFFFFF |
| border | rgba(255,255,255,0.05) | #E0E4E6 |
| textPrimary | #FFFFFF | #1A1C1E |
| textSecondary | #B0B0B0 | #64748B |
| accent | #1D99CC | #1D99CC ✨ |
| success | #00C853 | #10B981 |
| error | #FF5252 | #EF4444 |

## ✨ Tips:

1. **JetBrains Mono** se mantiene para códigos (MGS-BOY-04, percentajes, etc.)
2. **No hardcodear** colores específicos como `#050505` - usar `colors.*`
3. **Accents permanecen** - #1D99CC (cyan) y #2E7D32 (verde partner)
4. **Borders en dark mode** mantener `rgba(255,255,255,0.05)` para efecto "ghost"
5. **Borders en light mode** usar `colors.border` (#E0E4E6) para crispness
6. **Sombras en light mode** son soft y largas para el efecto "paper"

## 🚀 Próximos pasos:

1. Actualizar PartnerPerfil, PartnerProyectos, PartnerProjectDetail
2. Actualizar todos los componentes Admin restantes
3. Testear el toggle en todas las vistas
4. Verificar contraste AA en light mode
5. Ajustar cualquier color específico que no se vea bien en light mode
