# 📖 AdminMoney – App de Gestión de Gastos

## 🔹 Descripción del Proyecto

**Nombre del proyecto:** AdminMoney – App de Gestión de Gastos  

**Descripción general:**  
AdminMoney es una aplicación móvil desarrollada en **React Native** que permite a los usuarios registrar, clasificar y analizar sus gastos personales de manera sencilla y rápida.

**Objetivo:**  
Ayudar a los usuarios a administrar sus finanzas personales, tener control sobre sus gastos y tomar decisiones más informadas.

**Usuarios principales:**  
- 👤 Personas que desean controlar sus gastos diarios  
- 🎓 Estudiantes o profesionales con ingresos variables  

**Casos de uso principales:**  
- 📝 Registrar un gasto o ingreso  
- 📊 Consultar un resumen mensual de gastos e ingresos  
- 🗂️ Clasificar gastos por categorías  
- 📈 Visualizar gráficos y estadísticas de gastos  
- ⏰ Establecer alertas o presupuestos por categoría

---

## ⚙️ Requerimientos Funcionales

1. 🔑 Registro e inicio de sesión de usuarios con Firebase  
2. ➕ Agregar, editar y eliminar registros de gastos e ingresos  
3. 🗂️ Clasificación de gastos por categorías (Alimentación, Transporte, Entretenimiento, etc.)  
4. 📅 Visualización de resumen mensual de gastos e ingresos  
5. 📊 Gráficos básicos de distribución de gastos  
6. 🧭 Navegación entre pantallas mediante React Navigation  

---

## 🛠️ Requerimientos No Funcionales

1. 🎨 Interfaz sencilla, intuitiva y responsiva  
2. ⚡ La app debe ser rápida y no consumir demasiados recursos  
3. 🔒 Datos almacenados de manera segura en Firebase  
4. ✅ Validación de formularios para evitar entradas inválidas  
5. ⚠️ Manejo de errores en peticiones HTTP y Firebase  
6. 📱 Compatible con iOS y Android

---

## 🎨 Recursos Visuales

- 🌐 **Mockups y diseño de pantallas:** [Mockups](https://drive.google.com/drive/folders/1KtKVzGCmwuYf09Lspnp72JQRQQJA5bM4?usp=sharing)  
- 🗃️ **Diagrama Entidad-Relación (Base de Datos):** [Ver DER en dbdiagram.io](https://dbdiagram.io/d/AdminMoney-690b79966735e1117068b94a)

---

## 🗓️ Cronograma de Actividades (Sprints)

| Sprint | Fechas | Actividades |
|--------|--------|------------|
| **Sprint 1** | 10 nov – 16 nov | 🖌️ **Planificación y Diseño de la App**<br>- Definir flujo de pantallas y navegación.<br>- Crear wireframes y prototipos de todas las pantallas.<br>- Revisar requerimientos funcionales y no funcionales.<br>- Definir paleta de colores y estilo visual. |
| **Sprint 2** | 17 nov – 23 nov | ⚙️ **Configuración del Proyecto y Componentes Básicos**<br>- Crear proyecto en React Native.<br>- Instalar librerías necesarias (React Navigation, Firebase, librerías de gráficos).<br>- Desarrollar componentes reutilizables.<br>- Implementar estructura de navegación entre pantallas. |
| **Sprint 3** | 24 nov – 30 nov | 🗄️ **Base de Datos y Autenticación**<br>- Configurar Firebase (Firestore y Auth).<br>- Crear la estructura de la base de datos (Usuario, Categoria, Registro).<br>- Implementar registro e inicio de sesión.<br>- Validación de formularios y manejo de errores. |
| **Sprint 4** | 1 dic – 7 dic | ✏️ **CRUD de Transacciones**<br>- Agregar, editar y eliminar registros.<br>- Vincular registros con usuario y categoría.<br>- Validación de entradas y pruebas unitarias básicas. |
| **Sprint 5** | 8 dic – 14 dic | 📋 **Dashboard y Detalle de Transacciones**<br>- Mostrar listado de transacciones.<br>- Implementar filtros por categoría y fecha.<br>- Crear pantalla de detalle.<br>- Conectar datos de Firebase en tiempo real. |
| **Sprint 6** | 15 dic – 21 dic | 📊 **Informes y Gráficos**<br>- Implementar gráficos por categoría y resumen mensual.<br>- Ajustes de UI para visualización de estadísticas.<br>- Validación de consistencia de datos. |
| **Sprint 7** | 22 dic – 28 dic | 🧪 **Pruebas Generales y Optimización**<br>- Testeo completo en Android/iOS.<br>- Ajustes de rendimiento y memoria.<br>- Corregir errores y mejorar UI/UX. |
| **Sprint 8** | 29 dic – 4 ene | 📑 **Documentación y Preparación de Entrega**<br>- Crear README y manual de usuario.<br>- Revisión final de código y commits.<br>- Preparación para entrega o presentación.<br>- Publicación de APK o build final. |
