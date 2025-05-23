import { useQuery, UseQueryResult } from "@tanstack/react-query"
import axios from "axios"
interface Quote {
  id: number
  quote: string
  author: string
  tags: string[]
}

const useGetQuote = (): UseQueryResult<Quote> => {
  return useQuery({
    queryKey: ['quote'],
    queryFn: async () => {
        await new Promise(resolve => setTimeout(resolve, 100))
      const response = await axios.get('https://dummyjson.com/quotes/random')
      return response.data
    },
  })
}

export default useGetQuote
