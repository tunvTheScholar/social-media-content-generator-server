# Social Media Content Generator Server

A powerful backend server for generating and managing social media content, featuring access code management, post idea generation, caption creation, and user content handling.

GitHub Repository: [https://github.com/tunvTheScholar/social-media-content-generator-server](https://github.com/tunvTheScholar/social-media-content-generator-server)

## Description

This server provides a comprehensive set of APIs for social media content creation and management. It includes features such as:

- Access code generation and validation
- Post idea generation
- Caption creation from ideas
- User-generated content storage and retrieval
- Integration with AI services for content generation

## Architecture

The project follows a modular architecture:

```

server/
├── src/
│ ├── configs/
│ ├── controllers/
│ │ └── access-code/
│ │ └── generate/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ ├── services/
│ └── types/
├── .env
├── .gitignore
├── package.json
└── tsconfig.json

```

- `configs/`: Configuration files for environment variables and external services
- `controllers/`: Request handlers for different API endpoints
- `middlewares/`: Custom middleware functions
- `models/`: Data models and schemas
- `routes/`: API route definitions
- `services/`: Business logic and external service integrations
- `types/`: TypeScript type definitions

## How to Run

1. Clone the repository:

```

git clone https://github.com/tunvTheScholar/social-media-content-generator-server.git
cd social-media-content-generator-server

```

2. Install dependencies:

```

npm install

```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:

```

PORT=3000
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
GEMINI_API_KEY=your_gemini_api_key

```

4. Register for required services:

- Twilio: Sign up at [https://www.twilio.com/](https://www.twilio.com/) and obtain your Account SID and Auth Token.
- Firebase: Create a new project at [https://console.firebase.google.com/](https://console.firebase.google.com/), set up Firestore, and generate a service account key.
- Gemini API: Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey).

5. Start the server:

```

npm run dev

```

The server should now be running on `http://localhost:3000` (or the port you specified in the `.env` file).

## API Endpoints

- `POST /api/access-code/create`: Create a new access code
- `POST /api/access-code/validate`: Validate an access code
- `POST /api/generate/post-ideas`: Generate post ideas
- `POST /api/generate/captions-from-idea`: Create captions from a post idea
- `GET /api/generate/user-generated-contents`: Retrieve user-generated contents
- `POST /api/generate/save-caption`: Save a generated caption
- `POST /api/generate/unsave-caption`: Unsave a caption

For detailed API documentation, please refer to the API specification document (not included in this README).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
