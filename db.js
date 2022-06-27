const Pool = require('pg').Pool

const pool = new Pool({
    user: 'wtzrdhfzwlmult',
    password: '7103cd738b8b3583bd535617a499a462046c005de0dd9345c19863f9064355ea',
    host:'ec2-34-242-8-97.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'd3aig65kona9e5',
    ssl: {rejectUnauthorized: false}
})

module.exports = pool
