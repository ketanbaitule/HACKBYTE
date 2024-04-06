"use server"
import { clientPromise } from "@/utils/mongodb";
import { ObjectId } from "mongodb";

export async function addProgress(id, textArea){
    try {
        const client = await clientPromise;
        const incidentCollection =await client.db("whistleblower").collection("incidents");
        let t= await incidentCollection.updateOne(
            { _id: new ObjectId(id) },
            { $push: { "authority.comment": textArea } }
        );
    } catch (error) {
        console.error("Error in addProgress: ", error);
        throw error;
    }
}

export async function markSolved(id){
    try {
        const client = await clientPromise;
        const incidentCollection =await client.db("whistleblower").collection("incidents");
        await incidentCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { "authority.status": "Solved" }}
        );
    } catch (error) {
        console.error("Error in addProgress: ", error);
        throw error;
    }
}

export async function sendBack(id, textArea){
    try {
        const client = await clientPromise;
        const incidentCollection =await client.db("whistleblower").collection("incidents");
        await incidentCollection.updateOne(
            { _id: new ObjectId(id) },
            { 
                $push: { "description": { "from": "authority", "type": "markdown", "data": textArea} },
                $set: { "authority.status": "Send Back" }
            }
        );
    } catch (error) {
        console.error("Error in sendBack: ", error);
        throw error;
    }

}

export async function addDiscussion(id, textArea, type){
    try {
        const client = await clientPromise;
        const incidentCollection =await client.db("whistleblower").collection("incidents");
        await incidentCollection.updateOne(
            { _id: new ObjectId(id) },
            { 
                $push: { "description": { "from": "user", "type": type, "data": textArea} },
                $set: { "authority.status": "Pending" }
            })
    } catch (error) {
        console.error("Error in sendBack: ", error);
        throw error;
    }

}