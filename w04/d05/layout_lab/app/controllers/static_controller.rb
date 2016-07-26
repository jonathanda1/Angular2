class StaticController < ApplicationController

  def index
    #p params[:page].class <-- to figure out what the paramater is "string"
    if p params[:page] == "1"
      render :index_1
    elsif p params[:page] == "2"
      render :index_2
    end
      p params
  end

  def page
    if p params[:page] ==
      render :page
  end

end


