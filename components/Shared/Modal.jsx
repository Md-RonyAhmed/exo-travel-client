/* eslint-disable react/no-unescaped-entities */


const Modal = () => {
     return (
       <>
         <input type="checkbox" id="my-modal-3" className="modal-toggle" />
         <div className="modal">
           <div
             className="modal-box w-full min-h-full max-w-3xl relative rounded"
           >
             <label
               htmlFor="my-modal-3"
               className="btn btn-sm btn-circle absolute bg-primary border-none right-2 top-2"
             >
               ✕
             </label>
             <div className="bg-primary text-white p-5">
               <h2 className="text-xl">Contact Us</h2>
               <p className="text-sm">
                 We're experts who take pride in tailor-made itineraries that
                 suit any need. Please fill in the form below and a member of
                 our team will be in touch shortly.
               </p>
             </div>
             <div>
               <h3 className="text-xl text-center my-3 p-3 cursor-default bg-black text-white w-4/12">
                 New Travel Enquire
               </h3>
               <p className="pb-4 text-sm">
                 Please fill in the appropriate information below regarding any
                 travel plans or enquiries. Our team of travel experts will get
                 back to you shortly.
               </p>
             </div>
             <div className="grid lg:grid-cols-3 gap-3 grid-cols-1">
               <div className="form-control w-full max-w-xs">
                 <label className="label">
                   <span className="label-text">First name</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Enter first name.."
                   className="input input-bordered w-full max-w-xs"
                 />
               </div>
               <div className="form-control w-full max-w-xs">
                 <label className="label">
                   <span className="label-text">Last name</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Enter last name.."
                   className="input input-bordered w-full max-w-xs"
                 />
               </div>
               <div className="form-control w-full max-w-xs">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input
                   type="email"
                   placeholder="Enter email.."
                   className="input input-bordered w-full max-w-xs"
                 />
               </div>
               <div className="form-control w-full col-span-2">
                 <label className="label">
                   <span className="label-text">Enquire Name</span>
                 </label>
                 <input
                   type="text"
                   placeholder="Enter enquire title.."
                   className="input input-bordered w-full"
                 />
               </div>
               <div className="form-control max-w-xs w-full">
                 <label className="label">
                   <span className="label-text">Country</span>
                 </label>
                 <select className="select w-full input input-bordered max-w-xs">
                   <option disabled selected>
                     choose country
                   </option>
                   <option>Vietnam</option>
                   <option>Myanmar</option>
                   <option>Thailand</option>
                   <option>Laos</option>
                   <option>Indonesia</option>
                 </select>
               </div>
               <div className="form-control w-full max-w-xs">
                 <label className="label" htmlFor="date">
                   <span className="label-text">Estimated Travel Date</span>
                 </label>
                 <input
                   type="date"
                   id="date"
                   className="input input-bordered w-full max-w-xs"
                 />
               </div>
               <div className="form-control w-full max-w-xs">
                 <label className="label">
                   <span className="label-text">Estimated Duration</span>
                 </label>
                 <select className="select w-full input input-bordered max-w-xs">
                   <option disabled selected>
                     choose duration
                   </option>
                   <option>Less than 1 week</option>
                   <option>1-2 weeks</option>
                   <option>3-4 weeks</option>
                   <option>More than 4 weeks</option>
                 </select>
               </div>
               <div className="grid grid-cols-3 gap-2">
                 <div className="form-control w-full max-w-xs">
                   <label className="label">
                     <span className="label-text">Adults</span>
                   </label>
                   <input
                     type="email"
                     placeholder="1"
                     className="input input-bordered w-full max-w-xs"
                   />
                 </div>
                 <div className="form-control w-full max-w-xs">
                   <label className="label">
                     <span className="label-text">Children</span>
                   </label>
                   <input
                     type="email"
                     placeholder="0"
                     className="input input-bordered w-full max-w-xs"
                   />
                 </div>
                 <div className="form-control w-full max-w-xs">
                   <label className="label">
                     <span className="label-text">Infants</span>
                   </label>
                   <input
                     type="email"
                     placeholder="0"
                     className="input input-bordered w-full max-w-xs"
                   />
                 </div>
               </div>
               <div className="form-control w-full col-span-3">
                 <label className="label">
                   <span className="label-text">Itinerary plans or ideas</span>
                 </label>
                 <textarea
                   className="textarea textarea-bordered w-full"
                   placeholder="Your plans or ideas..."
                 ></textarea>
               </div>
               <div className="form-control w-full max-w-xs">
                 <label className="label">
                   <span className="label-text">Contact Number</span>
                 </label>
                 <input
                   type="number"
                   placeholder="Enter your number.."
                   className="input input-bordered w-full max-w-xs"
                 />
               </div>
               <div className="form-control w-full max-w-xs ml-3">
                 <label className="label">
                   <span className="label-text">Gender</span>
                 </label>
                 <div className="flex space-x-3">
                   <span>Male</span>
                   <input
                     type="radio"
                     name="radio-1"
                     className="radio"
                     checked
                   />
                   <span>Female</span>
                   <input type="radio" name="radio-1" className="radio" />
                 </div>
               </div>
             </div>
             <div className="modal-action">
               <label
                 htmlFor="my-modal-3"
                 className="btn btn-primary text-white capitalize rounded text-lg"
               >
                 Submit
               </label>
             </div>
           </div>
         </div>
       </>
     );
};

export default Modal;