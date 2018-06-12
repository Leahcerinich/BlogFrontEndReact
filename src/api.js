import Axios from 'axios';
import React, { Component } from 'react';
import runtimeEnv from '@mars/heroku-js-runtime-env';
const env = runtimeEnv();
export const api = Axios.create({
    baseURL: env.REACT_APP_API_URI || "http://localhost:8080"
})
console.log('URI', env.REACT_APP_API_URI)



