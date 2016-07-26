class CoursesController < ApplicationController

  def index
    @courses = Course.all.order(:name)
  end

  def show
    @course = Course.find(params[:id])
  end

  def new
    @course = Course.new
  end

  def create
    @course = Course.new(params.require(:course).permit(:name, :instructions, :servings))
    if @course.save
      redirect_to courses_path
    else
      render :new
    end
  end

  def edit
    @course = Course.find(params[:id])
  end

  def update
    @course = Course.find(params[:id])
    @course.update_attributes(params.require(:course).permit(:name, :instructions, :servings))
    if @course.save
      redirect_to courses_path
    else
      render :new
    end
  end

  def destroy
    @bean = Bean.find(params[:id])
    @bean.destroy
    redirect_to beans_path
  end


end
