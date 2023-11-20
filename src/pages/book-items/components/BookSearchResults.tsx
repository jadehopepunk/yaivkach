interface BookSearchResultsProps {
  query?: string
}

export default function BookSearchResults({ query }: BookSearchResultsProps) {
  return <p>book search results: {query}</p>
}
