import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://vyktzwkueekzuikiuttw.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5a3R6d2t1ZWVrenVpa2l1dHR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTUzODIsImV4cCI6MTk4Mzk3MTM4Mn0.siKIM2H7ySdEP7PaDqEqirGZO2ChzdF1Qv4RQxanu6o";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}