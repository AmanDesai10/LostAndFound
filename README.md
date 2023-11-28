# LostAndFound

## Project Description
LostAndFound is a full-stack web application designed to streamline the process of reporting and claiming lost items securely. The platform provides users with a user-friendly interface to report lost items and claim found items, facilitating verification of identities and enabling communication between users. The communication can be done using an in-app chat functionality. One of its key features is the implementation of geospatial queries, enhancing search functionality by enabling users to locate the nearest lost items based on their selected location. The user who has found the item can upload the details of the found item, and the user who has lost the item can claim it by providing the necessary details. The application also provides a secure login and registration system using Auth0, ensuring that user data is protected. The users can only chat with each other if the user who has found the item accepts the claim request. Upon the successful verification of the claim, the user can arrange a meeting to return the lost item. At the end, the person who found the item receives a reward for their efforts in form of discount coupons or vouchers.

The project follows Test-Driven Development (TDD) methodology to ensure code reliability and maintainability. Additionally, code quality is maintained through refactoring using the [DesigniteJava](https://www.designite-tools.com/products-dj) code quality assessment tool.

## Details about the Files in the Repository
- **Backend:** Contains the SpringBoot backend code.
- **frontend:** Contains the ReactJS frontend code.
- **Code Smell Files:** Contains the DesigniteJava code smell reports for the backend code along with the a small description of how it is refactored.

## Technologies Used
- Frontend: [ReactJS](https://reactjs.org/)
- Backend: [SpringBoot](https://spring.io/projects/spring-boot)
- IDEs: IntelliJ IDEA for backend, Visual Studio Code for frontend
- Authentication: [Auth0](https://auth0.com/)
- Database: [MongoDB](https://www.mongodb.com/)
- Testing Framework: JUnit5
- Mocking Framework: Mockito
- Code Quality Assessment Tool: [DesigniteJava](https://www.designite-tools.com/products-dj)

## Features
- User Registration and Login
- Report Lost Items
- Claim Found Items


## How to Get Started with the Project
1. **Clone the Repository:**
```
https://github.com/AmanDesai10/LostAndFound.git
```


2. **Backend Setup:**
- Open the backend project in IntelliJ IDEA.
- Configure the project dependencies and ensure that MongoDB is installed and running.
- Run the SpringBoot application to start the backend server.

3. **Frontend Setup:**
- Refer to the README.md file in the frontend folder for detailed instructions on setting up the frontend.

