import React from 'react'
import Newsitem from './Newsitem'
import { useState, useEffect } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
    const [articles, setArticles] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [page, setPage] = useState(1)


    const updateNews = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pagesize=${props.pagesize}&page=${page}&apiKey=a6b7739d65dd485492322518c4ecab93`
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
    }
    useEffect(() => {
        // document.title = `${capitalizeFirstLetter(props.category)} - News11`;
        updateNews();
        // eslint-disable-next-line
    }, [])
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pagesize=${props.pagesize}&page=${page}&apiKey=a6b7739d65dd485492322518c4ecab93`
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    return (

        <>
            <div className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
                <h1>
                    News11 Daily Updates
                </h1>
            </div>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}

            >
                <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 " key={element.url}>
                                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
