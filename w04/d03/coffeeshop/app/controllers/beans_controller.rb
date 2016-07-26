class BeansController < ApplicationController
  #before_action: find_bean, only: [:show, :edit, :update, :destroy]
    #run right before
  def index
  @beans = Bean.all
  end

  def show
    find_bean
  end

  def new
  @bean = Bean.new
  end

  # creating a new item in database
  def create
  @bean = Bean.new(bean_params)
    if @bean.save
     redirect_to beans_path
    else
     render :new
    end
  end


  #edit and update can alter info on item
  def edit
  find_bean
  end

  def update
    find_bean
    if @bean.update_attributes(bean_params)
      redirect_to beans_path
    else
      render :edit
    end
  end

  #to destroy from database
  def destroy
    find_bean
    @bean.destroy
    redirect_to beans_path
  end

  def bean_params
    params.require(:bean).permit(:name, :roast, :origin, :quantity)
  end

  def find_bean
    @bean = Bean.find(params[:id])
  end


end
