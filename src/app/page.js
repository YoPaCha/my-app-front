"use client"
import { useState, useEffect } from "react";
import TitlePage from "@/components/UI/TitlePage";
import GridPosts from "@/components/UI/GridPosts";

export default function Home() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3030/api/articles")
      .then(res => res.json())
      .then(data => {
        setArticles(data.results);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="container">
      {/* on utilise le composant TitlePage */}
      <TitlePage title="Accueil" />
      {/* on utilise le composant GridPosts */}
      {
        articles && <GridPosts articles={articles} />
      }
    </div>
  )
}