import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { LoadArtists } from "../../graphql/queries";
import Head from "next/head";
import AlbumList from "../../components/albumList";

const Artist = () => {
  const routes = useRouter();
  const { id } = routes.query;
  const { data, loading } = useQuery(LoadArtists);

  if (loading) return <p>Loading...</p>;

  const artiest = data.queryArtists.find((artist) => artist.id === id);

  return (
    <div>
      <Head>
        <title>{artiest.name} Albums</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{artiest.name} Albums</h1>
        {artiest && <AlbumList albums={artiest.albums} />}
      </main>
    </div>
  );
};

export default Artist;