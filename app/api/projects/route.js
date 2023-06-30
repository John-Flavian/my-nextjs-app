import { NextResponse } from "next/server";
import projects from './data.json';
import {v4 as uuidv4} from 'uuid';

export async function GET(request) {
    return NextResponse.json(projects);
}

export async function POST(request) {
    const { title, desc, url } = await request.json();
    // console.log({ title, desc, url });
    const newProject = {
        id: uuidv4(),
        title,
        desc,
        url
    };

    projects.push(newProject);

    return NextResponse.json(projects);
}