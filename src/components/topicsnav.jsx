import { getTopics } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopicsNav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <>
      <nav key="navbar" className="Nav">
        {topics.map((topic) => {
          return <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>;
        })}
      </nav>
    </>
  );
};

export default TopicsNav;
