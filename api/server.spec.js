const server = require("./server");
const request = require('supertest');

describe('server.js', function() {
    describe('GET /', function() {
        it('should return 200 ok', async function(){
            const response = await request(server).get("/");
            expect(response.status).toBe(200);
        });

        it('should return json', async function() {
            request(server).get('/').then(res => {
                expect(res.type).toMatch(/json/i)
            })
        });


        it('should respond with a { api: "up" } ', function() {
            return request(server).get('/').then(res => {
                expect(res.body.api).toBe("up")
            })
        });

    })
})

// describe('server.js', function(){
    
// })

