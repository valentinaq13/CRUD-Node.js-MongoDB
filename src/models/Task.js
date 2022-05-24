import { Schema, model } from "mongoose"; //schema son los nombres de los campos, model el nombre de la tabla

const task= new Schema({
title: String,
description: String,
done: Boolean,
}, {
    timestamps: true
})