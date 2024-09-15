import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const WorkFlow = () => {
  return (
    <div id="workflow" className="pt-[calc(60px+1rem)] mt-5">
    <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
      Accelerate your{" "}
      <span className="gradient-text">
        coding workflow.
      </span>
    </h2>
    <div className="flex flex-wrap-reverse justify-center">
      <div className="pt-12 w-full lg:w-1/2">
        {checklistItems.map((item, index) => (
          <div key={index} className="flex mb-12">
            <div className="check-circle bg-neutral-900 mx-6">
              <CheckCircle2 />
            </div>
            <div>
              <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
              <p className="text-md text-neutral-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 w-full lg:w-1/2">
        <img src={codeImg} alt="Coding" />
      </div>
    </div>
  </div>
  )
}

export default WorkFlow