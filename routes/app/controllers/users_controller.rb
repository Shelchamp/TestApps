class UsersController < ApplicationController

    def index 
        @users = User.all
        render json: @users
    end

    def create 
        # render json: params
        user = User.new(user_params)

        if user.save
            render json: user
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end

    end

    def show 
        user = User.find(params[:id])
        if user != nil
            render json: user
        else
            render json: user.errors.full_messages
        end
    end

    def edit 
        render json: params
    end
    
    def update
        user = User.find(params[:id])
        if user.update!(name: params[:name], email: params[:email])
            render json: user
        else 
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find(params[:id])
        if user.destroy!
            render json: user
        else 
            render json: user.errors.full_messages
        end
    end

    private

    def user_params
        params.require(:user).permit(:name, :email)
    end
  

end
