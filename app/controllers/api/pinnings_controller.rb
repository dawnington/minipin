class Api::PinningsController < ApplicationController

  def create
    @pinning = Pinning.new(pinning_params)
    if @pinning.save
      render json: { base: ['Pin saved!'] }, status: 200
    else
      render json: { base: ['Pin has already been saved to this board.'] }, status: 422
    end
  end

  def destroy
    @pinning = Pinning.find(params[:id])
    @pinning.destroy
    render json: {}
  end

  private

  def pinning_params
    params.require(:pinning).permit(:board_id, :pin_id, :description)
  end

end
