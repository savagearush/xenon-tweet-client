import "./profile.css";
import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [tweet, setTweet] = useState("");

  // const query = useQuery({ queryKey: ["tweets"], queryFn: () => {} });

  const mutation = useMutation({
    mutationFn: (newTweet) => {
      console.log(newTweet);
    },
    onSuccess: () => {
      // Invalidate and refetch

      queryClient.invalidateQueries({ queryKey: ["tweets"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = 123;
    mutation.mutate({ tweet, userId });
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
