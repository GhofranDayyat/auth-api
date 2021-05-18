
'use strict';
const supergoos = require('@code-fellows/supergoose');
const server = require('../auth-server/src/server');
const bcrypt = require('bcrypt');
const base64= require('base-64');
// const superTest = require('supertest')
const mockServer =supergoos(server.app)


describe('V1 (Unauthenticated API) routes)',()=>{

  let id;
  it('POST by /api/v1/:model , create()',async()=>{
      let obj = {
        name:'cake',
        calories:20,
        type:'PROTIEN'
      }
    let res = await mockServer.post('/api/v1/food').send(obj);
      expect(res.body.name).toEqual(obj.name);
      expect(res.status).toEqual(201);

  });

  it('GET list by /api/v1/:model , read()',async()=>{
    let obj = {
      name:'cake',
      calories:20,
      type:'PROTIEN'
    }
  let res = await mockServer.get('/api/v1/food');
    expect(res.body[0].name).toEqual(obj.name)
    expect(res.status).toEqual(200);

});
it('GET one by /api/v1/:model/ID , read()',async()=>{
    let obj = {
      name:'cake',
      calories:20,
      type:'PROTIEN'
    }
    let readFood = await mockServer.get('/api/v1/food/');
    console.log(readFood.body[0]._id);
    let foodId = readFood.body[0]._id  
    let res = await mockServer.get(`/api/v1/food/${foodId}`);
    console.log(res.body);
    expect(res.body.name).toEqual(obj.name);
    expect(res.status).toEqual(200);
    id=res.body._id
});

it('PUT  by /api/v1/:model/ID , update()',async()=>{
    let obj= {
      name:'cake',
      calories:500,
      type:'PROTIEN'
    }
    let res = await mockServer.put(`/api/v1/food/${id}`).send(obj);
    expect(res.body.calories).toEqual(500)
    expect(res.status).toEqual(200);
});

it('DELETE by /api/v1/:model/ID , delete()',async()=>{
  let res = await mockServer.delete(`/api/v1/food/${id}`);
    let readFood = await mockServer.get(`/api/v1/food/${id}`);
    expect(readFood.body).toBeNull();
    expect(res.status).toEqual(200);
});
});
