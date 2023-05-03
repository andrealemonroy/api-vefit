import swaggerJSDoc from "swagger-jsdoc";
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Documentacion de mi API",
        version: "1.0.0",
    },
    servers: [
        {
            url: "http://localhost:4000",
        },
    ],
    components: {
        //securitySchemes: {
        //  bearerAuth: {
        //    type: "http",
        //    scheme: "bearer",
        //  },
        //},
        //ingredientes, alimentos, categorias, healthyFoods, medicalReport, webinars
        //profile, user, auth
        schemas: {
            ingredients: {
                type: "object",
                required: ["nameIngredient", "proteins", "sugars", "carbohydrates", "fats", "calories"],
                properties: {
                    id: {
                        type: "string",
                    },
                    nameIngredient: {
                        type: "string",
                    },
                    proteins: {
                        type: "string",
                    },
                    sugars: {
                        type: "string",
                    },
                    carbohydrates: {
                        type: "string",
                    },
                    fats: {
                        type: "string",
                    },
                    calories: {
                        type: "string",
                    },
                    category: {
                        type: "Object" /*********************** */
                    }
                }
            },
            aliments: {
                type: "object",
                required: ["name", "description", "source", "characteristics", "benefits", "recommendations", "category", "canBeReplacedBy"],
                properties: {
                    name: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    source: {
                        type: "string",
                    },
                    characteristics: {
                        type: "string",
                    },
                    benefits: {
                        type: "string",
                    },
                    recommendations: {
                        type: "string",
                    },
                    price: {
                        type: "number",
                    },
                    image: {
                        type: "string",
                    },
                    category: {
                        type: "string",
                    },
                    canBeReplacedBy: {
                        type: "array", //*************** */
                    }
                }
            },
            categories: {
                type: "object",
                required: ["name"],
                properties: {
                    name: {
                        type: "string",
                    },
                    image: {
                        type: "string"
                    }
                }
            },
            healthyFoods: {
                type: "object",
                required: ["nameFood", "ingredients", "preparation"],
                properties: {
                    nameFood: {
                        type: "string"
                    },
                    ingredients: {
                        type: "array" /*********************** */
                    },
                    preparation: {
                        type: "string"
                    },
                }
            },
            medicalReports: {
                type: "object",
                required: ["initialDate", "endDate", "nutritionist", "patient", "nutritionalDiagnosis", "nutritionalObjective", "nutritionalRecommendations", "name"],
                properties: {
                    initialDate: {
                        type: "string",
                    },
                    endDate: {
                        type: "string",
                    },
                    nutritionist: {
                        type: "string",
                    },
                    patient: {
                        type: "string",
                    },
                    nutritionalDiagnosis: {
                        type: "string",
                    },
                    nutritionalObjective: {
                        type: "string",
                    },
                    nutritionalRecommendations: {
                        type: "string",
                    },
                    name: {
                        type: "string",
                    }
                }
            },
            webinar: {
                type: "object",
                required: ["titulo", "fechaYHora", "link"],
                properties: {
                    titulo: {
                        type: "string",
                    },
                    fechaYHora: {
                        type: "string",
                    },
                    link: {
                        type: "string",
                    },
                    responsables: {
                        type: "object"
                    }
                }
            },
            profile: {
                type: "object",
                //required:["diseases"],
                properties: {
                    birthday: {
                        type: "string",
                    },
                    weight: {
                        type: "number",
                    },
                    height: {
                        type: "number",
                    },
                    diseases: {
                        type: "string"
                    },
                    complete: {
                        type: "boolean",
                    }
                }
            },
            user: {
                type: "object",
                required: ["email", "name", "password", "termsAndConditions", "privacyPolicy", "sub"],
                properties: {
                    email: {
                        type: "string"
                    },
                    name: {
                        type: "string"
                    },
                    password: {
                        type: "string",
                    },
                    termsAndConditions: {
                        type: "boolean"
                    },
                    privacyPolicy: {
                        type: "boolean"
                    },
                    sub: {
                        type: "string"
                    },
                    profile: {
                        type: "object"
                    }
                }
            }
        },
    },
};
const swaggerOptions = {
    swaggerDefinition,
    apis: ["./src/routes/*.ts"],
};
export default swaggerJSDoc(swaggerOptions);
//# sourceMappingURL=SwaggerOptions.js.map