import React from 'react'

const GithubUsers = ({users}) => {
  return (
    <>
       <h2>List of GitHub Users</h2>
       <div className="container-fluid mt-5">
          <div className="row text-center">

            {
               users.map( (curElem) => {

                  const { id, avatar_url, login, type} = curElem;

                  return(
                     <>
            <div className="col-10 col-md-4 mt-5" key={id}>
               <div className="card p-2">
                  <div className="d-flex align-items-center">
                      <div className="image"><img src={avatar_url} alt="image" className="rounded" width="155"/></div>
                      <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0 textLeft">{login}</h4><span className="textLeft">{type}</span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                            <div className="d-flex flex-column"><span className="articles">Articles</span><span className="number1">38</span></div>
                            <div className="d-flex flex-column"><span className="followers">Followers</span><span className="number1">980</span></div>
                            <div className="d-flex flex-column"><span className="rating">Rating</span><span className="number1">8.9</span></div>
                        </div>
                      </div>
                  </div>
               </div>
            </div>
                     </>
                  )
               })
            }

          </div>

       </div>
    </>
  )
}

export default GithubUsers;