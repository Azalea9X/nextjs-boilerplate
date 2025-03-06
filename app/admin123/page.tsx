"use client"; 
import { NextStudio } from "next-sanity/studio";
import defineConfig from "../../sanity.config";


const AdminPage = () => {
  return <NextStudio config={defineConfig} />;
};

export default AdminPage;