# Angular-ASP.NET-Web-API-Assessment

This project is a web application that demonstrates the integration of an Angular front-end with an ASP.NET Core Web API back-end. It showcases the basics of building a full-stack web application using Angular for the user interface and ASP.NET Core for the API layer. The app is designed to assess the interaction between the front-end and back-end technologies.

## Features

- **Angular Frontend**: Built with Angular to create a responsive and dynamic UI.
- **ASP.NET Core Web API Backend**: Provides a RESTful API to interact with the front-end.
- **CRUD Operations**: Demonstrates the basic CRUD functionality with the API.
  
## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (for Angular development)
- [Angular CLI](https://angular.io/cli) (for managing Angular projects)
- [.NET SDK](https://dotnet.microsoft.com/download) (for ASP.NET Core development)
  
## Installation

### Frontend (Angular)

1. Clone this repository:

   ```bash
   git clone https://github.com/shimels1/Angular-ASP.NET-Web-API-assesment.git
   ```

2. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Run the Angular development server:

   ```bash
   ng serve
   ```

   This will start the Angular application at `http://localhost:4200`.

### Backend (ASP.NET Core Web API)

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Restore the required NuGet packages:

   ```bash
   dotnet restore
   ```

3. Run the ASP.NET Core Web API:

   ```bash
   dotnet run
   ```

   The API will be available at `http://localhost:5000` (or another available port).

## Usage

- The Angular frontend interacts with the API to perform basic CRUD operations.
- You can test the API directly using tools like Postman or through the Angular application.

## Screenshots

![ScreenShot](https://github.com/shimels1/Angular-ASP.NET-Web-API-assesment/blob/main/screenshoot/Screenshot%202023-09-15%20200607.jpg)
![ScreenShot](https://github.com/shimels1/Angular-ASP.NET-Web-API-assesment/blob/main/screenshoot/Screenshot%202023-09-15%20200707.jpg)
![ScreenShot](https://github.com/shimels1/Angular-ASP.NET-Web-API-assesment/blob/main/screenshoot/Screenshot%202023-09-15%20200742.jpg)
![ScreenShot](https://github.com/shimels1/Angular-ASP.NET-Web-API-assesment/blob/main/screenshoot/Screenshot%202023-09-15%20200804.jpg)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
