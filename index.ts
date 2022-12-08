"use strict";

import express from "express";
import { users } from "./src/routers/users"

const app = express();

app.use(express.json());
app.use('users/', users);
