
import { useEffect, useState } from 'react';
import { searchSmartJob } from './api/job';

export default  function NetWorkService() {
  const [keyword, setKeyword] = useState(null);
  const [workType, setWorkType] = useState(null);
  const [category, setCategory] = useState(null);
  const [position, setPosition] = useState(null);
  const [experience, setExperience] = useState(null);
  const [listOfSmartCv, setListOfSmartCv] = useState({});
  const [searchParams, setSearchParams] = useState({});
  useEffect(()=>{
    searchSmartJob().then(res =>{
      if(res && res.data && res.data.content){
        setListOfSmartCv(res.data.content)
      }
    })
  },[])
  const onChangeKeywords = (e) =>{
    setKeyword(e.target.value)
  }
  const onChangeWorkType = (e, data) =>{
    setWorkType(data.value);
    
  }
  const onChangeCategory = (e, data) => {
    setCategory(data.value);
  }

  const onChangePosition = (e, data) => {
    setPosition(data.value);
  }

  const onChangeExperience = (e, data) => {
    setExperience(data.value);
  }
  const onApplyToFilterJob = async (e) => {
    if(workType){
      setSearchParams({...searchParams, workType});
    }else {
      delete searchParams.workType;
    }
    
    if(category){
      setSearchParams({...searchParams,category});
    }else {
      delete searchParams.category;
    }

    if(position) {
      setSearchParams({...searchParams,position});
    } else {
      delete searchParams.position;
    }

    if(experience) {
      setSearchParams({...searchParams,experience});
    }
    else {
      delete searchParams.experience;
    }
  }
  const onSearchSmartCV = async (e) =>{
    searchSmartJob(searchParams).then((res) => {
      if(res && res.data && res.data.content){
        setListOfSmartCv(res.data.content)
      }
      
    });
  }
  const onKeySearch = async (e) =>{
    
    if(e.key === 'Enter'){
      searchSmartJob(searchParams).then((res) => {
        if(res && res.data && res.data.content){
          setListOfSmartCv(res.data.content)
        }
        
      });
    }else {
      if(keyword){
        setSearchParams({...searchParams,keyword});
      }else{
        delete searchParams.keyword;
      }
    }
  }
  return {
    onChangeKeywords,
    onSearchSmartCV,
    listOfSmartCv,
    onChangeWorkType,
    onChangeCategory, 
    onChangePosition,
    onChangeExperience,
    onApplyToFilterJob,
    onKeySearch
  }
}