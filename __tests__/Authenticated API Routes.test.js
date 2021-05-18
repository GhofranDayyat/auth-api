
'use strict';
const supergoos = require('@code-fellows/supergoose');
const server = require('../auth-server/src/server');
const bcrypt = require('bcrypt');
const base64= require('base-64');

const mockServer =supergoos(server.app)


describe('V2 (Authenticated API Routes)',()=>{
  it('POST /api/v2/:model , create()',()=>{

  });
});
