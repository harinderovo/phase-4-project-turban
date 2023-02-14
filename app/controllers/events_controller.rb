class EventsController < ApplicationController
    before_action :find_event, only: [:show]

    def index
        render json: Event.all, status: :ok
    end

    def show 
        render json: @event, serializer: EventSerializer, status: :ok
    end

    private 

    def find_event
        @event = Event.find(params[:id])
    end
end
