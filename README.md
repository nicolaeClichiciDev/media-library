## 📌 Project Overview

Project is not a production-ready code for sure. It was supposed to create a small API to show interaction between front and API, but unfortunately, had no time to implement that. Data is all mocked and is pushed to initial states of store. In some places, there is really stupid code and interaction with state, but that's the only way I figured out for now.


## 🚀 Tech Stack

- **React 19 + TypeScript + Vite**
- **Tailwind CSS**
- **Dnd Kit**
- **Redux Toolkit**
- **RxJs + Observable Hooks**
- **Remmeda**


## 🔧 How to Start

  1️⃣ Clone the repository.

  2️⃣ Run `npm i` at the root level of the project.

  3️⃣ Run `npm run dev`.

  4️⃣ Access [http://localhost:3000](http://localhost:3000/)[/](http://localhost:3000/).


## 📂 Mocks

For different scenarios regarding the size of media files or the number of instances, in `src/service/mock.ts`, at the top of the file, there are two constants representing:

- The number of media files/folders to mock.
- Two constants representing a testing mocked media file and folder.


## 📂 Architecture
- 📂 utils (utility functions)
- 📂 store (redux store, slices, reducers, selectors)
- 📂 service (an imitation of real services: mock, utilities for mock)
- 📂 providers (all providers and contexts)
- 📂 hooks (all hooks)
- 📂 components: 
  - 📂 shared (some components used in another several components)
  - 📂 media-grid (media grid section, contains card, no data and more components)
  - 📂 side-bar (left section which contains logo, folders and filters)
  - 📂 top-bar (top section which contains search, selected items, change folder for selected files, delete selected files)



## ❗ Known Issues (UI)

- ❌ No loading state.
- ❌ No different overlay for "no data" when filtering (e.g., No such file with name X or No such file with media type Y).
- ❌ Missing tooltips in necessary places.
- ❌ No "danger actions" alerts/confirmations.
- ❌ Hover over media file (not sure).


## 🛠️ Known Issues (Technical)

- 🔧 Missing theme configuration.
- 🔧 Some components can be generalized (e.g., add folder & rename folder fields).
- 🔧 Tailwind hell in all components.
- 🔧 State management issues (many places).
- 🔧 Some workarounds.

## ⏭️ Next Steps
- API
- Theme configuration and usage of components/design library
- Rfc & cleanup
- Generalize some components
- Responsive layout
- Automation tests
- Vite configuration for different envs

## 💭 Overall

Could be better, but had a release this week and a lot of work. As an excuse, I worked with Redux Toolkit about two years ago. I kinda think it's better to use Redux Toolkit with RTK or, even better, to have React-Query + RxJs Subjects. Also in project is not used Radix UI and  Shadcn because of time for configuration (used to work with Radix but for mobile mostly). For me it's not a problem this stack, but I need time to study docs.


