import type { TaskCardProps } from "../libs/types";

export function TaskCard(props: TaskCardProps){
  return (
      <div className="col-12 m-2 p-0">
                <div className="card mb-3">
            <div className="card-body">
                <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <h5 className="card-title">{props.title}</h5>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
                    <p className="card-text"> {props.description} </p>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-success me-2">Done</button>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
                    <button className="btn btn-danger">Delete</button>
                </div>
                </div>
            </div>
        </div>
      </div> 
  );
}
