import request from "supertest";
import app from "../src";

//Test for the POST request API in the requirement
describe("POST /feature", () => {
  describe("Given a featureName, email and enable", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/feature").send({
        featureName: "createTransaction",
        email: "sheeyao@hotmail.com",
        enable: true,
      });
      console.log("Helo", response.statusCode);
      expect(response.statusCode).toBe(200);
    });
  });

  describe("Provide Non exist feature", () => {
    test("should respond with a 304 status code", async () => {
      const response = await request(app).post("/feature").send({
        featureName: "withdrawMoney",
        email: "sheeyao@hotmail.com",
        enable: true,
      });
      expect(response.statusCode).toBe(304);
    });

    test("should respond with a 304 status code", async () => {
      const response = await request(app).post("/feature").send({
        featureName: "login",
        email: "sheeyao@hotmail.com",
        enable: true,
      });
      expect(response.statusCode).toBe(304);
    });
  });

  describe("Not providing all three properties, missing some keys", () => {
    test("Missing featureName, should respond with a 403 status code", async () => {
      const response = await request(app).post("/feature").send({
        email: "sheeyao@hotmail.com",
        enable: true,
      });
      expect(response.statusCode).toBe(403);
    });

    test("Missing email, should respond with a 403 status code", async () => {
      const response = await request(app).post("/feature").send({
        featureName: "createTransaction",
        enable: true,
      });
      expect(response.statusCode).toBe(403);
    });

    test("Missing enable, should respond with a 403 status code", async () => {
      const response = await request(app).post("/feature").send({
        featureName: "createTransaction",
        email: "sheeyao@hotmail.com",
      });
      expect(response.statusCode).toBe(403);
    });
  });
});

//Test for the GET request API in the requirement
describe("GET /feature", () => {
  describe("Missing the required params: email, featureName", () => {
    test("should respond with a 403 status code", async () => {
      const response = await request(app).get("/feature").send();
      expect(response.statusCode).toBe(403);
    });
  });

  describe("Given the required query params", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app)
        .get("/feature?email=sheeyao@hotmail.com&featureName=createTransaction")
        .send();
      expect(response.statusCode).toBe(200);
    });
  });

  describe("canAccess property key in response", () => {
    test("should respond with json object with key canAccess as true", async () => {
      const response = await request(app)
        .get("/feature?email=sheeyao@hotmail.com&featureName=createTransaction")
        .send();
      expect(response.body).toEqual({ canAccess: true });
    });

    test("should respond with json object with key canAccess as false", async () => {
      const response = await request(app)
        .get("/feature?email=sauce@hotmail.com&featureName=createTransaction")
        .send();
      expect(response.body).toEqual({ canAccess: false });
    });
  });
});
