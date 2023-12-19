import "./tweet.css";
import { useState } from "react";

export default function Tweet() {
  const [user, setUser] = useState(null);
  const [tweet, setTweet] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="tweet__container">
      <label className="label" htmlFor="tweet">
        Tweet
      </label>
      <textarea
        name="tweet"
        id="tweet"
        cols="50"
        rows="5"
        placeholder="Share your tweet to world 🐥"
        onChange={(e) => setTweet(e.target.value)}
      ></textarea>
      <button type="submit" className="tweet__btn">
        Tweet Now
      </button>
    </form>
  );
}
