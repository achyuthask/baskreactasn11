import { useEffect ,useState} from "react";
import { omdb } from "../util";
import { useSearchParams } from "react-router-dom";
import Singlesearchcard from "../components/singlesearchcard";
import { Box  ,Stack ,Typography} from "@mui/material";



const Search =()=>{
 
     const [list,setList] =useState([]);
     const [params] = useSearchParams();
     const [Totalrecords,setTotalrecords] =useState(0);
    
    useEffect(() =>{
        if(params.has("q") && params.get("q") !==" ") {
        (async () =>{
          const response = await omdb.get(`?s=${params.get("q")}`);
          setTotalrecords(response.data.totalResults)
        setList(response.data.Search)

        })();
      }
    }, [params])

    return(
    <>
    <Box p={5}>
      <Typography> {Totalrecords}results found</Typography>

      
      <Stack  spacing={3} mt={1}>
    {list.map((e, idx) =>{
      console.log(e)
     return <Singlesearchcard data={e} key={idx}/>


    })}
    </Stack>
    
    </Box>
       </>
    );
}

export default Search;