import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../../src/DynamicPage.css'

function DynamicPage() {
  const { pageId } = useParams();
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  document.title = "About"
  let link = document.querySelector("link[rel*='icon']");
  link.href = "https://www.sanctamaria.nl/runtime/images/49/32x32/sancta_rood_equilibrist.jpg"

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch("https://worker-hello.torvic2021.workers.dev/api/getpage", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uuid: pageId }), // use dynamic pageId
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();


        if (data.success) {
            setTitle(data.content.Titel)
            setContent(data.content.PageContent);
            document.title = data.content.Titel || "No Title"
            console.log(pageId)
        } else {
          setError("Page not found");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching page");
      }
    };

    fetchPage();
  }, [pageId]);

  if (error) return <p className="text-red-500 p-4">{error}</p>;
  if (content === null) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
        <div className="text-block">
                <h1>{title}</h1>
                <p>{content}</p>
        </div>
    </div>
  );
}



export default DynamicPage;




