class Api::JobsController < ApplicationController

  def index
    if(params[:searchTerm] == '')
      render json: ['Must enter a search term.'], status: 422
    else
      @jobs = Job.where('title ILIKE ?', "%#{params[:searchTerm]}%")
        .includes(
          :company,
          :locations,
          :levels,
          :categories
        )
      if @jobs.length == 0
        render json: ['No Match Found! Please try again.'], status: 404
      else
        render :index
      end
    end
  end

  def show
    @job = Job.find(params[:id])
    
    if(@job)
      render :show
    else
      render json: ['Job not Found! :('], status: 404
    end
  end

end