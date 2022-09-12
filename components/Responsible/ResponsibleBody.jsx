import ResponsibleRow from "./ResponsibleRow";


const ResponsibleBody = () => {
     return (
       <>
         <div className="mb-10">
           <h2 className="text-3xl tracking-wide text-center text-[#444444] mb-4">
             SUSTAINABILITY IN ACTION
           </h2>
           <hr className="lg:w-4/12 w-1/2 mx-auto border-[1.3px] border-[#dbdbdb] bg-[#dbdbdb]" />
         </div>
         <div>
           <ResponsibleRow
             head1={"GOING CARBON NEUTRAL"}
             head2={"LOCAL CHARITIES"}
             head3={"COMMUNITY BASED TOURISM"}
             body1={
               "Being based in Southeast Asia, we understand that climate change is real because we see its effects every day across our destinations. Simply put, action is needed. Rising to the occasion, we've become the first DMC in Asia to strive for carbon neutrality. Not just for our offices and staff, but also by offering Carbon Neutral Holidays to our clients and their guests."
             }
             body2={
               "By supporting local charities, enterprises and organizations that contribute to environmental and cultural causes, we're able to maximize the benefits that tourism has on locals and their economy. Whenever possible, we encourage guests to partake in sustainable tourism activities, shop at fair-trade shops, or dine in restaurants run by vocational institutions that train youths and disadvantaged peoples. Additionally, we regularly take part in charity fundraising events such as the Angkor Wat Marathon, and encourage clients and travelers to do the same."
             }
             body3={
               "By actively supporting community-based tourism projects alongside local and international development organizations, DMC helps generate revenue in remote and impoverished communities in Asia. These projects allow visitors to engage in unique and authentic cultural experiences while simultaneously helping to preserve local traditions, improve welfare and support environmental preservation."
             }
             btn={"More Information"}
           />
         </div>
       </>
     );
};

export default ResponsibleBody;