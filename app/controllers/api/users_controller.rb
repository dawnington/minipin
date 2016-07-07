class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @boards = @user.boards
    unless current_user.id == @user.id
      @boards = @boards.select { |board| !board.private }
    end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      @boards = @user.boards
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def followers
    @user = User.find(params[:id])
    @follows = @user.in_follows
  end

  def following
    @user = User.find(params[:id])
    @follows = @user.out_follows
  end

  def feed
    user = User.find(params[:id])
    @pinnings = user.feed
    render 'api/pinnings/index'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :name)
  end
end
