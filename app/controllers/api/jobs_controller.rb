class Api::JobsController < ApplicationController

  def index
    unless(params[:searchTerm] == '')
      @jobs = Job.where('title ILIKE ?', "%#{params[:searchTerm]}%")
        .includes(
          :company,
          :locations,
          :levels,
          :categories
        )
      render :index
    end

    render json: ['Must enter a search term.'], status: 422
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