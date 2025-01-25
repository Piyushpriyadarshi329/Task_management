import { useState } from "react";
import Modal from "../../component/Model";
import FeedComponent from "./FeedComponent";


export default function FeedList() {
  const [title, settitle] = useState<String | undefined>(undefined)
  const [description, setdescription] = useState<String | undefined>(undefined)
  const [taskCreateModel, settaskCreateModel] = useState(false)


  const [data, setdata] = useState([
    {
      title:"Test Feed",
      descrition:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      url:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title:"Test Feed",
      descrition:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      url:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }, {
      title:"Test Feed",
      descrition:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      url:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ])




  async function createFeed() {
    try {
      let payload = { title, description }
      console.log("payload", payload)
    } catch (error) {
      console.log(error)
    }
  }


  return (

    <div className="flex flex-col w-full" >
      <div className="text-center mt-5 font-bold text-3xl">
        Feed
      </div>
      <div className="flex w-full justify-end mb-10 ">
        <button
          className="flex w-50  bg-blue-400 justify-center rounded-3xl p-2 mr-2 "
          onClick={() => {
            settaskCreateModel(true)
          }}
        >
          Add Feed
        </button>
      </div>

      {taskCreateModel && (
        <Modal
          isOpen={taskCreateModel}
          onClose={() => settaskCreateModel(false)}
          children={
            <div className="flex  flex-1 flex-col">
              <h2 className="text-center">Add Feed </h2>
              <input placeholder="Title" className='border-2 rounded-xl flex-1 p-1 h-15 mt-5 text-center'
                onChange={(e) => {
                  settitle(e.target.value)
                }}
              />
              <input placeholder="Description" className='border-2 rounded-xl flex-1 p-1 h-15 mt-5 text-center'
                onChange={(e) => {
                  setdescription(e.target.value)
                }}
              />
              <input placeholder="Description" type="file" className='border-2 rounded-xl flex-1 p-1 h-15 mt-5 text-center'
                onChange={(e) => {
                  setdescription(e.target.value)
                }}
              />
              <div className="ml-10 mr-10 flex justify-center mt-10 ">
                <button onClick={createFeed} className="bg-blue-400 rounded-2xl p-3 flex-1"><p className="font-bold"> Submit</p></button>
              </div>

            </div>
          }
        >
        </Modal>
      )}



      <div>
{data?.map((item)=>{
  return(
    <FeedComponent item={item}/>
  )
})}
      </div>


    </div>
  )
}
