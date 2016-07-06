class Api::BoardsController < ApplicationController
  def show
    @board = Board.find(params[:id])
  end

  def index
    @boards = User.find(params[:user_id]).boards
  end

  def create
    @board = Board.new(board_params)

    if @board.save
      render :show
    else
      render json: @board.errors, status: 422
    end
  end

  def update
    @board = Board.find(params[:id])

    if @board.update(board_params)
      render :show
    else
      render json: @board.errors, status: 422
    end
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy
    render 'api/boards/show'
  end

  private

  def board_params
    params.require(:board).permit(:user_id, :name, :description, :private)
  end
end
