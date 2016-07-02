class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def followers
    @user = User.find(params[:id])
    @follows = @user.in_follows
    render 'api/follows/index'
  end

  def following
    @user = User.find(params[:id])
    @follows = @user.out_follows
    render 'api/follows/index'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :name)
  end
end
